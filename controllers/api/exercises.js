const fetch = require('node-fetch');
const Exercise = require('../../models/exercise');

module.exports = {
  search,
  addExercise
};

// async function getAllForUser(req, res) {
//   const exercises = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
//   res.json(orders);
// }

async function addExercise(req, res) {
  try {
    const newExercise = await Exercise.create(req.body)
    res.status(200).json(newExercise);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
}

async function search(req, res) {
  try {
    const url = `${process.env.API_URL}/name/${req.query.q}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    };
    const data = await fetch(url, options);
    const results = await data.json();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json(err);
  }
}
