const pgp = require('pg-promise')
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

exports.errorHandler400 = (err, req, res, next) => {
  if (err.code)
    err.status = 400;
  if (err.status)
    res.status(err.status).send({ msg: err.message || 'Bad request' });
  else
    next(err);
}

exports.errorHandler404 = (err, req, res, next) => {
  if (err instanceof QRE && err.code === qrec.noData) {
    res.status(400).send({ msg: err.message || 'Page not found' });
  }
  else next(err)
}

exports.errorHandler500 = (err, req, res, next) => {
  console.log(err)
  res.status(500).send({ msg: 'Internal Server Error' });
}