const app = require('express')();
const apiRouter = require('./routes/api.js');

app.use('/api', apiRouter);

app.get('/*', (req, res, next) => {
  next({ status: 404 });
});

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = app;