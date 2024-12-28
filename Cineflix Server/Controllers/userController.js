const User = require("./../Models/userModel");
const util = require("util");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../Utils/email");
const CustomError = require("./../Utils/CustomError");
const asyncErrorHandler = require("./../Utils/asynchErrorHandler");
const crypto = require("crypto");
const { decode } = require("punycode");
const { error } = require("console");
const asynchErrorHandler = require("./../Utils/asynchErrorHandler");
const authController = require("./authController");

exports.getAllUsers = asyncErrorHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    statuss: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

const filterReqObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

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
  authController.createSendResponse(user, 200, res);
});

exports.updateMe = asyncErrorHandler(async (req, res, next) => {
  if (req.body.password || req.body.confirmPassword) {
    return next(
      new CustomError(
        "You cannot update your password using this endpoint!",
        400
      )
    );
  }

  // Update user
  const filterObj = filterReqObj(req.body, "name", "email");
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterObj, {
    runValidators: true,
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      updatedUser,
    },
  });
});

exports.deleteMe = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});
