const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
    test: {
        DB_URL: 'mongodb://localhost:27017/animal_rehoming_test'
    },
    development: {
        DB_URL: 'mongodb://localhost:27017/animal_rehoming'
    }
}

module.exports = config[NODE_ENV]