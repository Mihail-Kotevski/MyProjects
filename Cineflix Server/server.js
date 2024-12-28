const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

process.on("uncaughtRejection", (err) => {
  console.log(err.message);
  console.log("Uncaught Exception occured! Shutting down...");
  
  process.exit(1);
});

const app = require("./app");

mongoose
  .connect(process.env.CON_STR, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    console.log(conn);
    console.log("DB connection sucessful");
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("server has started");
});

process.on("unhandledRejection", (err) => {
  console.log(err.message);
  console.log("Unhandeled rejection occured! Shutting down...");

  server.close(() => {
    process.exit(1);
  });
});
