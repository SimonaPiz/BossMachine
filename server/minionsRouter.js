const express = require('express');
const minionsRouter = express.Router({mergeParams: true});
// import helper functions
const { getAllFromDatabase, getFromDatabaseById, addToDatabase } = require('./db');
// route /api/minions
module.exports = minionsRouter;

minionsRouter.param('minionId', (req, res, next, index) => {
  try {
    const minion = getFromDatabaseById('minions', index);
    if (minion) {
      req.minionId = index;
      req.minion = minion;
      next();
    } else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    res.status(400).send(error);
  }
  
});

// GET /api/minions to get an array of all minions.
minionsRouter.get('/', (req, res, next) => {
  const minions = getAllFromDatabase('minions');
  if (minions) {
    res.status(200).send(minions);
  } else {
    res.status(404).send();
  }
});

// POST /api/minions to create a new minion and save it to the database.
minionsRouter.post('/', (req, res, next) => {
  const minion = req.body;
  const newMinion = addToDatabase('minions', minion);
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

// DELETE /api/minions/:minionId to delete a single minion by id.
minionsRouter.delete('/:minionId', (req, res, next) => {
  const id = req.minionId;
  // to implement
  const delMinion = '';
  if (delMinion) {
    res.status(204).send();
  } else {
    res.status(404).send('Not found');
  }
});
