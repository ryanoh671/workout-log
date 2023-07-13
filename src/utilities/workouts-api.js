import sendRequest from "./send-request";
const BASE_URL = '/api/workouts';

export async function addWorkout(workout) {
  console.log(workout, 'workout in workoutAPI')
  return sendRequest(`${BASE_URL}`, 'POST', workout);
}