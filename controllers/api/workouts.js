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
    const newWorkout = {
      ...req.body,
      workoutId: req.body.apiId
    } 
    console.log(newWorkout, 'newWorkout in cont')
    console.log(req.body, 'this is the reqBODY')
    workoutInDb = await Workout.create(newWorkout)
    res.status(200).json(newWorkout);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}
