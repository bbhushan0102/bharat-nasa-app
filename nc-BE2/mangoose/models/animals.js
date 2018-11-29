const mongoose = require('mongoose');
const animalSchema = new mongoose.Schema ({
  name: String,
  colour: String,
  traits:String,
  owner_id: {
    type:mongoose.Schema.Types.Object,
    ref:'Owners',
    default: null
  }
})
const Animal = mongoose.model('animals', animalSchema);
module.exports = Animal