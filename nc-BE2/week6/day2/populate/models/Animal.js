const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: String,
    colour: String,
    traits: [String],
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'owners'
    }
})

const Animal = mongoose.model('animals', animalSchema)

module.exports = Animal;