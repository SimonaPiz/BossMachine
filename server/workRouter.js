const express = require('express');
// import helper functions
const { } = require('./db');

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
