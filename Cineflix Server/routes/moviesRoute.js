const express = require("express");
const moviesController = require("./../Controllers/moviesController");
const authController = require("./../Controllers/authController");
const router = express.Router();

router.route("/movies-stats").get(moviesController.getMovieStats);
router.route("/movies-by-genres/:genre").get(moviesController.getMovieByGenre);

router
  .route("/highest-rated")
  .get(moviesController.getHighestRated, moviesController.getAllMovies);

router
  .route("/")
  .get(authController.protect, moviesController.getAllMovies)
  .post(moviesController.createMovie);

router
  .route("/:id")
  .get(authController.protect, moviesController.getMovie)
  .patch(moviesController.updateMovie)
  .delete(
    authController.protect,
    authController.restrict('admin'),
    moviesController.deleteMovie
  );

module.exports = router;
