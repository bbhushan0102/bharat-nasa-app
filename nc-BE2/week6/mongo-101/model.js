const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Students must have names"]
    },
    lucky_number: {
        type: Number,
        required: [true, "Everyone has a lucky number!"]
    }
})

module.exports = mongoose.model('students', studentSchema)