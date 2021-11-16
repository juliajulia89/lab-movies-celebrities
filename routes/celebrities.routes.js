// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const express = require("express");

const Celebrity = require("./../models/Celebrity.model");

router.get("/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const createdCeleb = await Celebrity.create({
      name,
      occupation,
      catchPhrase,
    });
    console.log(createdCeleb);
    res.redirect("/celebrities");
  } catch (error) {
    console.log(error);
    res.render("celebrities/new-celebrity");
  }
});

router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities: celebrities });
    })
    .catch((error) => res.render("error", { error: error }));
});
module.exports = router;
