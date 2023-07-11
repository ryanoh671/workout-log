import sendRequest from "./send-request";
const BASE_URL = '/api/exercises';

export async function search(query) {
  return sendRequest(`${BASE_URL}/search?q=${query}`);
}

export function addExercise(exercise) {
  return sendRequest(`${BASE_URL}/${exercise}`, 'POST');
}

// export function getAllForUser() {
//   return sendRequest(`${BASE_URL}`);
// }