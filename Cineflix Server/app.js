//Import packages
const express = require("express");
let app = express();
const CustomError = require("./Utils/CustomError");
const globalErrHandler = require("./Controllers/errorController");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const sanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const morgan = require("morgan");
let limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message:
    "We have recieved too many requirests. Please try again in one hour!",
});

app.use(helmet());
app.use("/api", limiter);
app.use(express.json({ limit: "10kb" }));
app.use(sanitize());
app.use(xss());
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratings",
      "releaseYear",
      "releaseDate",
      "genres",
      "directors",
      "price",
    ],
  })
);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static("./Public"));
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

const movieRouter = require("./routes/moviesRoute");
const authRouter = require("./routes/authRouter");
const userRoute = require("./routes/userRoute");

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRoute);

app.all("*", (req, res, next) => {
  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server`,
    404
  );
  next(err);
});

app.use(globalErrHandler);

module.exports = app;
