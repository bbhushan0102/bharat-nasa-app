const apiRouter = require('express').Router()
const filmRouter = require('./film');

apiRouter.use('/films', filmRouter)

module.exports = apiRouter