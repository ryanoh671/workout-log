import { useState, useEffect } from 'react';
import './WorkoutItem.css';
// import NumericInput from 'react-numeric-input';
import * as workoutsAPI from '../../utilities/workouts-api'

export default function WorkoutItem({item, workoutLog}){
  const [formData, setFormData] = useState([])
  const [sets, setSets] = useState(1);
  const [workout, setWorkout] = useState([])

  useEffect(() => {
    function updateFormData() {
      let inputDataArray = formData.map(inputObj => ({...inputObj}));
      while (inputDataArray.length < sets) inputDataArray.push({weight: 1, reps: 1})
      while (inputDataArray.length > sets) inputDataArray.pop();
      setFormData(inputDataArray);
    }
    updateFormData();
    }, [sets]);

    function handleChange(evt, index) {
      let updatedFormData = formData.map((inputObj, idx) => {
        console.log(idx, 'idx');
        console.log(index, 'index');
        if (idx === index) return {...inputObj, [evt.target.name]: evt.target.value};
        else return {...inputObj}
      })
      setFormData(updatedFormData);
      console.log(formData, 'this is the formData')
    }

    // async function handleAddWorkout(evt) {
    //   // const exerciseInLog = workoutLog.some(ex => ex.apiId === exercise.id)
    //   // if (exerciseInLog) return;
    //   evt.preventDefault();
    //   const newWorkout = await workoutsAPI.addWorkout(evt);
    //   console.log(newWorkout, 'this is the new workout');
    //   // setWorkoutLog([...workoutLog, newExercise]);
    // }

  return (
    <>
      <div>
        <h5>{item.name}</h5>
        <form >
          <label>Total sets</label>
        <input value={sets} min={1} max={5} type="number" onChange={(evt) => setSets(Number(evt.target.value))}/>
        {formData.map((inputObj, idx) => (
          <div key={idx}>
            <label>Set {idx+1} lbs</label>
            <input type="text" name="weight" min={1} value={`${formData[idx]["weight"]}`}  placeholder="Weight" onChange={(evt) => handleChange(evt, idx)}/>
            <label>Set {idx+1} reps</label>
            <input type="text" name="reps" min={1} value={`${formData[idx]["reps"]}`} placeholder="Reps" onChange={(evt) => handleChange(evt, idx)}/>
          </div>
        ))}
      </form>
      </div>
    </>
  )
}; 
// style={{ input: {width: 100} }}
// `${formData[idx]["weight"]}`