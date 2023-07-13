const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const workoutSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String, 
  notes: String, 
  exercises: [exerciseSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);