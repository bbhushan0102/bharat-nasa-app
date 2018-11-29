const mongoose = require("mongoose");
const { Animal, Owner } = require("../models");

const seedDB = (ownerData, animalData) => {
  return mongoose.connection
    .dropDatabase()
    .then(() => {
      return Owner.insertMany(ownerData);
    })
    .then(ownerDocs => {
      animalData = animalData.map(animal => {
        const owner_id = Math.random() < 0.5 ? null : sample(ownerDocs)._id;
        return {
          ...animal,
          owner_id
        };
      });
      return Animal.insertMany(animalData);
    });
};
module.exports = seedDB;
