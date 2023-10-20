const express = require('express');
const minionsRouter = express.Router({mergeParams: true});

// route /api/minions
module.exports = minionsRouter;

// GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
  // to implement
  const minions = [];
  if (minions) {
    res.status(200).send(minions);
  } else {
    res.status(404).send();
  }
});
