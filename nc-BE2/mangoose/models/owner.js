const mongoose = require('mongoose');

const ownersSchema = new mongoose.Schema ({
  name: String,
  adress:String,
  contact_number:String
})
const Owner = mongoose.model('owners',ownersSchema);
module.exports = Owner