import sendRequest from "./send-request";
const BASE_URL = '/api/workouts';


export async function createWorkout(data) {
  console.log(data, 'data in workoutAPI')
  return sendRequest(`${BASE_URL}`, 'POST', data);
}

export async function getUserWorkouts() {
  return sendRequest(`${BASE_URL}/user`);
}

