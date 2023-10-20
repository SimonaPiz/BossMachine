const express = require('express');
// router for /api/meetings
const meetingsRouter = express.Router({mergeParams: true});

module.exports = meetingsRouter;

// GET /api/meetings to get an array of all meetings.
meetingsRouter.get('/', (req, res, next) => {
  // to implement
  const meetings = [];
  if (meetings) {
    res.status(200).send(meetings);
  } else {
    res.status(404).send();
  }
});