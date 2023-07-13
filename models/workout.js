const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// const exerciseSchema = require('./exercise')

const workoutSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  exercise: { type: Schema.Types.ObjectId, ref: 'Exercise'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);