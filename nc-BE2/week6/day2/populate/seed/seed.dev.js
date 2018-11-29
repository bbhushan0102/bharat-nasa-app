const mongoose = require('mongoose')
const { DB_URL } = require('../config')
const seedDB = require('./seed')

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        return seedDB(1000, 1000)
    })
    .then(() => {
        return mongoose.disconnect()
    })