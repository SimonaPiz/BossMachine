const express = require('express');
const ideasRouter = express.Router({mergeParams: true});

// router for /api/ideas
module.exports = ideasRouter;

// GET /api/ideas to get an array of all ideas.
ideasRouter.get('/', (req, res, next) => {
  // to implement
  const ideas = [];
  if (ideas) {
    res.status(200).send(ideas);
  } else {
    res.status(404).send();
  }
});

// POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const idea = req.body;
  // to implement
  const newidea = idea;
  if (newidea) {
    res.status(201).send(newidea);
  } else {
    res.status(400).send();
  }
});
