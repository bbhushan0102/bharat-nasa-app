const app = require('express')();
const apiRouter = require('./routes/api.js');
const mongoose = require('mongoose')
const { DB_URL } = require('./config')

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to ${DB_URL}...`)
  })

app.use('/api', apiRouter);

app.get('/*', (req, res, next) => {
  next({ status: 404 });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ err });
});

module.exports = app;