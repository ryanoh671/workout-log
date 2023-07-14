const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const exerciseListSchema = new Schema({
  exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
  setsDetails: []
}, {
  timestamps: true
});

const workoutSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  exercises: [exerciseListSchema],
  date: { type: Date },
  notes: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);