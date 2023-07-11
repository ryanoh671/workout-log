// import M from 'materialize-css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import './ExerciseList.css';
import ExerciseListItem from '../ExerciseListItem/ExerciseListItem';
import * as exercisesAPI from '../../utilities/exercises-api';

export default function ExerciseList( {searchedExercises} ) {
  const [exercises, setExercises] = useState([]);

  async function handleAddExercise(exerciseId) {
    const newExercise = await exercisesAPI.addExercise(exerciseId);
    setExercises(...exercises, newExercise);
  }

  const searchedExerciseList = searchedExercises.map(e => 
      <ExerciseListItem 
        key={e.id}
        e={e}
        handleAddExercise={handleAddExercise}
      />
    );
  return (
    <main>
      {searchedExerciseList}
    </main>
  )
}