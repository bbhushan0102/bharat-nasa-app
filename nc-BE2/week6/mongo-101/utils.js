const faker = require('faker')

exports.createStudent = () => (
    {
        name: faker.name.firstName(),
        lucky_number: Math.floor(Math.random() * 10)
    }
)