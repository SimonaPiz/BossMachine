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