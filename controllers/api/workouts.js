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

async function createWorkout(req, res) {
  try {
    console.log(req.body,'req.body'); // Log the request body
    // Rest of the code...
  } catch (error) {
    next(error);
  }
  // try {
  //   req.body.user = req.user._id
  //   const newWorkout = await Workout.create(req.body);
  //   console.log(newWorkout, 'workout in CTRL')
  //   res.status(200).json(newWorkout);
  // } catch (err) {
  //   console.log(err)
  //   res.status(500).json(err);
  // }
}