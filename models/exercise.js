const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const exerciseSchema = new Schema({
  name: String,
  bodyPart: String, 
  target: String,
  equipment: String, 
  gifUrl: String,
  apiId: String,
}, {
  timestamps: true
});


module.exports = mongoose.model('Exercise', exerciseSchema);