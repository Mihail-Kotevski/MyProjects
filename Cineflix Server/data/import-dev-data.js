const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Movie = require("../Models/movieModel");

dotenv.config({ path: "./config.env" });

//Conect to MongoDB
mongoose
  .connect(process.env.CON_STR, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    console.log(conn);
    console.log("DB connection sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

//Read Movies.JSON file
const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

const deleteMovies = async () => {
  try {
    await Movie.deleteMany();
    console.log("Data succesfully deleted!");
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};

const importMovies = async () => {
  try {
    await Movie.create(movies);
    console.log("Data succesfully imported!");
  } catch (err) {
    console.log(err.message);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importMovies();
}
if (process.argv[2] === "--delete") {
  deleteMovies();
}
