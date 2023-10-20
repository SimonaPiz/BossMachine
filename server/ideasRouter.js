const express = require('express');
// import helper functions
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase } = require('./db');
const ideasRouter = express.Router({mergeParams: true});

// router for /api/ideas
module.exports = ideasRouter;

// GET /api/ideas to get an array of all ideas.
ideasRouter.get('/', (req, res, next) => {
  const ideas = getAllFromDatabase('ideas');
  if (ideas) {
    res.status(200).send(ideas);
  } else {
    res.status(404).send();
  }
});

// POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const idea = req.body;
  const newidea = addToDatabase('ideas', idea);
  if (newidea) {
    res.status(201).send(newidea);
  } else {
    res.status(400).send();
  }
});

// GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get('/:ideaId', (req, res, next) => {
  const id = req.params.ideaId;
  const idea = getFromDatabaseById('ideas', id);
  if (idea) {
    res.status(200).send(idea);
  } else {
    res.status(404).send('Not found');
  }
});

// PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put('/:ideaId', (req, res, next) => {
  const idea = req.body;
  const updateidea = updateInstanceInDatabase('ideas', idea);
  if (updateidea) {
    res.status(200).send(updateidea);
  } else {
    res.status(404).send('Not found');
  }
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete('/:ideaId', (req, res, next) => {
  const id = req.params.ideaId;
  // to implement
  const delidea = '';
  if (delidea) {
    res.status(204).send();
  } else {
    res.status(404).send('Not found');
  }
});