const express = require('express');
// import helper functions
const { getAllFromDatabase } = require('./db');
// router for /api/meetings
const meetingsRouter = express.Router({mergeParams: true});

module.exports = meetingsRouter;

// GET /api/meetings to get an array of all meetings.
meetingsRouter.get('/', (req, res, next) => {
  const meetings = getAllFromDatabase('meetings');
  if (meetings) {
    res.status(200).send(meetings);
  } else {
    res.status(404).send();
  }
});

// POST /api/meetings to create a new meeting and save it to the database.
meetingsRouter.post('/', (req, res, next) => {
  // to implement
  const meeting = '';
  // to implement
  const newmeeting = '';
  if (newmeeting) {
    res.status(201).send(newmeeting);
  } else {
    res.status(400).send();
  }
});

// DELETE /api/meetings to delete all meetings from the database.
meetingsRouter.delete('/', (req, res, next) => {
  // to implement
  const delmeeting = '';
  if (delmeeting) {
    res.status(204).send();
  } else {
    res.status(400).send();
  }
});
