const fetch = require('node-fetch');
const Workout = require('../../models/workout');

module.exports = {
  // getAllForUser,
  createWorkout
};


// async function getAllForUser(req, res) {
//   const workouts = await Workout.find({user: req.user._id});
//   res.json(workouts);
// }

async function createWorkout(req, res, next) {
  try {
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
