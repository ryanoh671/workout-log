const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../../controllers/api/exercises');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/exercises'

// POST /api/exercises 
router.get('/search', exercisesCtrl.search);

module.exports = router;