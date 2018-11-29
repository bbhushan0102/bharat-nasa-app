const mongoose = require('mongoose')
const { DB_URL } = require('../config')
const { Animal, Owner } = require('../models')
const { generateOwners, generateAnimals } = require('../utils')

function seedDB(ownerCount, animalCount) {
    return mongoose.connection.dropDatabase()
        .then(() => {
            const owners = generateOwners(ownerCount)
            return Owner.insertMany(owners)
        })
        .then(ownerDocs => {
            const animals = generateAnimals(animalCount, ownerDocs)
            return Animal.insertMany(animals)
        })
}

module.exports = seedDB

// mongoose.connect(DB_URL, { useNewUrlParser: true })
//     .then(() => {
//         return mongoose.connection.dropDatabase()
//     })
//     .then(() => {
//         const owners = generateOwners(1000)
//         return Owner.insertMany(owners)
//     })
//     .then(ownerDocs => {
//         const animals = generateAnimals(1000, ownerDocs)
//         return Animal.insertMany(animals)
//     })
//     .then(animalDocs => {
//         console.log(animalDocs)
//         return mongoose.disconnect()
//     })
//     .catch(err => {
//         console.log('Seeding error:', err)
//     })