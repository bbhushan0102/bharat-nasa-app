const pgp = require('pg-promise')({ promiseLib: Promise });

const DB = require('../config');

module.exports = pgp(DB);
