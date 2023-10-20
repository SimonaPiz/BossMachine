const express = require('express');
// router for /api/meetings
const meetingsRouter = express.Router({mergeParams: true});

module.exports = meetingsRouter;
