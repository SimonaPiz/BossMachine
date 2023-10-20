const express = require('express');
const apiRouter = express.Router();

// import and connect minionsRouter
const minionsRouter = require('./minionsRouter');
apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
