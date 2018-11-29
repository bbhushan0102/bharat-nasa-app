const faker = require('faker')
const { sample, sampleSize, random } = require('lodash')

exports.generateOwners = length => {
    return Array.from({ length }, () => ({
        name: faker.name.firstName(),
        address: {
            city: faker.address.city(),
            streetName: faker.address.streetName()
        },
        contactNumber: faker.phone.phoneNumber()
    }))
}

exports.generateAnimals = (length, ownerDocs) => {
    return Array.from({ length }, () => ({
        name: faker.name.findName(),
        imageUrl: faker.image.imageUrl(),
        colour: faker.commerce.color(),
        traits: generateTraits(),
        ownerId: generateOwnerId(ownerDocs)
    }))
}

function generateOwnerId(ownerDocs) {
    return Math.random() > 0.5 ? sample(ownerDocs)._id : null
}


function generateTraits() {
    const traits = ['friendly', 'homicidal', 'snooty', 'inquisitive', 'compulsive liar...']
    return sampleSize(traits, random(1, 3))
    // return Array.from({ length: Math.ceil(Math.random() * 3) }, () => {
    //     return traits[Math.floor(Math.random() * traits.length)]
    // })
}