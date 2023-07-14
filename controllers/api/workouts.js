const fetch = require('node-fetch');
const Workout = require('../../models/workout');

module.exports = {
  createWorkout,
  getUserWorkouts
};

async function createWorkout(req, res) {
  try {
    console.log(req.body)
    req.body.workoutDetails.user = req.user._id;
    const newWorkout = await Workout.create(req.body.workoutDetails)
    req.body.exerciseDetails.forEach(function(exercise) {
      newWorkout.exercises.push(exercise)
    })
    await newWorkout.save()
    const allUserWorkouts = await Workout.find({user: req.user._id}).populate("exercises.exercise")
    console.log(allUserWorkouts, 'allUserWorkotus')
    res.status(200).json(allUserWorkouts);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

async function getUserWorkouts(req, res) {
  try {
    const userWorkouts = await Workout.find({user: req.user._id})
    res.status(200).json(userWorkouts);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

