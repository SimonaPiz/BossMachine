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

// POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {
  const minion = req.body;
  // to implement
  const newMinion = minion;
  if (newMinion) {
    res.status(201).send(newMinion);
  } else {
    res.status(400).send();
  }
});

// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get('/:minionId', (req, res, next) => {
  res.status(200).send(req.minion);
});

// PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put('/:minionId', (req, res, next) => {
  const minion = req.body;
  // to implement
  const updateMinion = minion;
  if (updateMinion) {
    res.status(200).send(updateMinion);
  } else {
    res.status(404).send('Not found');
  }
});
