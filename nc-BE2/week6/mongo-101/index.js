const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/test_1'
const Student = require('./model.js')
const { createStudent } = require('./utils.js')
const students = Array.from({ length: 10 }, createStudent)

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => {
        console.log(`connected to ${DB_URL}`)
        return mongoose.connection.dropDatabase();
    })
    .then(() => {
        return Student.insertMany(students)
    })
    .then(() => {
        return Student.find({ lucky_number: 5 })
    })
    .then(console.log)
    .catch(console.log)

// const turiya = new Student({
//     name: 'Turiya',
//     lucky_number: 7,
//     favourite_animals: ['Elephant', 'Flying Squirrel']
// })

// turiya.save()
//     .then(newDoc => {
//         console.log(newDoc)
//     })