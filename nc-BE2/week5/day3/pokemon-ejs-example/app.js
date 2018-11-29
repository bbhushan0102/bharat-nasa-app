const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./router/api');
const { errorHandler400, errorHandler404, errorHandler500 } = require('./errors')
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.json(), express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
  // res.send('all good')
});

app.use('/api', apiRouter);

app.use('/*', (req, res) => {
  res.status(404).send('Page not found');
});

app.use(errorHandler400);
app.use(errorHandler404);
app.use(errorHandler500);

module.exports = app;



