const express = require('express');
const apiRouter = express.Router();

// import and connect minionsRouter
const minionsRouter = require('./minionsRouter');
apiRouter.use('/minions', minionsRouter);

// import and connect ideasRouter
const ideasRouter = require('./ideasRouter');
apiRouter.use('/ideas', ideasRouter);

// import and connect meetingsRouter
const meetingsRouter = require('./meetingsRouter');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
