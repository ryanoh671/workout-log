const fetch = require('node-fetch');
const Exercise = require('../../models/exercise');

module.exports = {
  search,
  addExercise
};

async function addExercise(req, res) {
  try {
    let exerciseInDb = await Exercise.findOne({apiId: req.body.id});
    if (!exerciseInDb) {
      const newExer = {
        ...req.body, 
        apiId: req.body.id
      }
      exerciseInDb = await Exercise.create(newExer)
    }
    console.log(req.body, 'exerices line 18')
    res.status(200).json(exerciseInDb);
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
    console.log(results, 'results of fetch url, options')
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json(err);
  }
}
