const express = require('express');
const apiRouter = express.Router();

// import and connect minionsRouter
const minionsRouter = require('./minionsRouter');
apiRouter.use('/minions', minionsRouter);

// import and connect ideasRouter
const ideasRouter = require('./ideasRouter');
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
