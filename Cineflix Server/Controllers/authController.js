const User = require("./../Models/userModel");
const util = require("util");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../Utils/email");
const CustomError = require("./../Utils/CustomError");
const asyncErrorHandler = require("./../Utils/asynchErrorHandler");
const crypto = require("crypto");
const { decode } = require("punycode");
const { error } = require("console");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};

const createSendResponse = (user, statusCode, res) => {
  const token = signToken(user._id);

  const options = {
    maxAge: process.env.LOGIN_EXPIRES,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.cookie("jwt", token, options);
  user.password = undefined;
  res.status(statusCode).json({
    status: "Succes",
    token,
    data: {
      user,
    },
  });
};

exports.signup = asyncErrorHandler(async (req, res, next) => {
  const newUser = await User.create(req.body);
  createSendResponse(newUser, 201, res);
});

exports.login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new CustomError(
      "Please provide email ID & and password for login in!",
      400
    );
    return next(error);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePasswordInDb(password, user.password))) {
    const error = new CustomError("Incorrect email or password", 400);
    return next(error);
  }
  createSendResponse(user, 200, res);
});

exports.protect = asyncErrorHandler(async (req, res, next) => {
  const testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    next(new CustomError("Your are not logged in!", 401));
  }

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECRET_STR
  );

  const user = await User.findById(decodedToken.id);
  if (!user) {
    const error = new CustomError(
      "The user with the given token does not exist",
      401
    );
    next(error);
  }

  const isPasswordChanged = await user.isPasswordChanged(decodedToken.iat);
  if (isPasswordChanged) {
    const error = new CustomError(
      "The password has been changed recently. Please login again",
      401
    );
    return next(error);
  }

  req.user = user;

  next();
});

exports.restrict = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      const error = new CustomError(
        "You do not have permission to perform this action",
        403
      );
      next(error);
    }
    next();
  };
};

exports.forgotPassword = asyncErrorHandler(async (req, res, next) => {
  //1. GET USER BASED ON POSTED EMAIL
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    const error = CustomError(
      "We cant find the user with the given email!",
      404
    );
    next(error);
  }

  //2. GENERATE A RANDOM RESET TOKEN
  const resetToken = user.createResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //3. SEND THE TOKEN BACK TO THE USER EMAIL
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;
  const message = `We have received a password reser request. Please use the below link to reset your password!\n\n${resetUrl}\n\nThis reset password link will be valid for only 10 minutes!`;
  try {
    await sendEmail({
      email: user.email,
      subject: "Password change request recieved.",
      message: message,
    });

    res.status(200).json({
      status: "success",
      message: "Password reset link sent to the user email.",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpire = undefined;
    user.save({ validateBeforeSave: false });

    return next(
      new CustomError(
        "There was an error sending password email! Please try again later.",
        500
      )
    );
  }
});

exports.resetPaswords = asyncErrorHandler(async (req, res, next) => {
  const token = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: token,
    passwordResetTokenExpire: { $gt: Date.now() },
  });

  if (!user) {
    const error = new CustomError("Token is invalid or expired!", 400);
    next(error);
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpire = undefined;
  user.passwordChangedAt = Date.now();

  user.save();

  createSendResponse(user, 200, res);
});

exports.updatePassword = asyncErrorHandler(async (req, res, next) => {
  // GET USER
  const user = await User.findById(req.user._id).select("+password");
  //CORECT PASSWORD
  if (
    await !user.comparePasswordInDb(req.body.currentPassword, user.password)
  ) {
    const error = new CustomError(
      "You must enter the correct password to update the existing one!",
      401
    );
    next(error);
  }
  //IF CORRECT UPDATE
  user.password = req.body.password;
  user.confirmPassword = req.body.password;
  await user.save();
  //LOGIN
  createSendResponse(user, 200, res);
});
