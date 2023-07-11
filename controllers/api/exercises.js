const fetch = require('node-fetch');

module.exports = {
  search,
};



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
