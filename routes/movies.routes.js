// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const express = require("express");
const Celebrity = require("./../models/Celebrity.model");
const Movie = require("./../models/Movie.model");

router
  .route("/create")
  .get(async (req, res) => {
    try {
      const allCelebs = await Celebrity.find();
      res.render("movies/new-movie.hbs", { allCelebs });
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res) => {
    try {
      const { title, genre, plot, cast } = req.body;
      const createdMovie = await Movie.create({ title, genre, plot, cast });
      console.log(createdMovie);
      res.redirect("/movies");
    } catch (error) {
      console.log(error);
    }
  });

router.get("/", async (req, res, next) => {
  try {
    const movie = await Movie.find().populate("cast");
    console.log(allMovies);
    res.render("movies/movies", { allMovies });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
