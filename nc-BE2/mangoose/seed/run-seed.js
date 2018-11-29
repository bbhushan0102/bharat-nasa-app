const mongoose = require('mongoose');
const {generateOwnerData, generateAnimalData} = require ('../utils');
const seedDB = require('./seed')

mongoose
  .connect("mongodb://localhost:27017/animal_rehoming",
    { useNewUrlParser: true }
  ) 
  .then(()=>{
    return seedDB(generateOwnerData(5), generateAnimalData(5));
  })
  .then (() => {
    console.log('Database generated successfully,.............');
    mongoose.disconnect();
  })