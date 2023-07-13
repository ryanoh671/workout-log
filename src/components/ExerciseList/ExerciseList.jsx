import { useState } from 'react';
// import 'materialize-css/dist/css/materialize.min.css'
import './ExerciseList.css';
import * as exercisesAPI from '../../utilities/exercises-api';

export default function ExerciseList( {searchedExercises, setWorkoutLog, workoutLog} ) {

  async function handleAddExercise(exercise) {
    const exerciseInLog = workoutLog.some(ex => ex.apiId === exercise.id)
    if (exerciseInLog) return;
    const newExercise = await exercisesAPI.addExercise(exercise);
    setWorkoutLog([...workoutLog, newExercise]);
  }

  return (
    <div>
      {searchedExercises.map(e => (
        <div key={e.id}>
          <h3>{e.name}</h3>
          <p>{e.target}</p>
          <p>{e.equipment}</p>
          <img src={e.gifUrl} />
          <button onClick={() => {handleAddExercise(e)}}>ADD EXERCISE</button>
        </div>
      ))}
    </div>
  )
}