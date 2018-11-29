const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        city: String,
        streetName: String
    },
    contactNumber: String
})

const Owner = mongoose.model('owners', ownerSchema)

module.exports = Owner;