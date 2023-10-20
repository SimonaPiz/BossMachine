const express = require('express');
// import helper functions
const { } = require('./db');
const { getAllWorksByMinionsId } = require('../../project-4-boss-machine-start/project-4-boss-machine-start/server/db');

/*Bonus: you may implement routes to allow bosses 
to add and remove work from their minions' backlogs.

Schema:

  Work:
    id: string
    title: string
    description: string
    hours: number
    minionId: string*/ 
const workRouter = express.Router({mergeParams: true});

module.exports = workRouter;

// GET /api/minions/:minionId/work to get an array of all work for the specified minon.
workRouter.get('/', (req, res, next) => {
  const works = getAllWorksByMinionsId(req.minionId);
  if (works) { 
    res.status(200).send(works);
  } else {
    res.status(404).send();
  }
});
