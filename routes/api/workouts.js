const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/workouts'

// POST /api/workouts
router.post('/', ensureLoggedIn, workoutsCtrl.createWorkout);
router.get('/user', ensureLoggedIn, workoutsCtrl.getUserWorkouts);
router.delete('/:id', ensureLoggedIn, workoutsCtrl.deleteWorkout);


module.exports = router;