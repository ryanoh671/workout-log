import './ExerciseList.css';
import * as exercisesAPI from '../../utilities/exercises-api';

export default function ExerciseList( {searchedExercises, setWorkoutLog, workoutLog, search} ) {

  async function handleAddExercise(exercise) {
    console.log(exercise, 'exercise in handle Add Exercise')
    const exerciseInLog = workoutLog.some(ex => ex.apiId === exercise.id)
    if (exerciseInLog) return;
    const newExercise = await exercisesAPI.addExercise(exercise);
    setWorkoutLog([...workoutLog, newExercise]);
  }

  return (
    <div>
      {searchedExercises.map(e => (
        <div key={e.id} className='card'>
          <h5>{e.name}</h5>
          <p>{e.target}</p>
          <p>{e.equipment}</p>
          <img src={e.gifUrl} />
          <button onClick={() => {handleAddExercise(e)}}>ADD EXERCISE</button>
        </div>
      ))}
    </div>
  )
}