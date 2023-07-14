import { useState, useEffect } from 'react';
import './WorkoutItem.css';
// import NumericInput from 'react-numeric-input';
import * as workoutsAPI from '../../utilities/workouts-api';

export default function WorkoutItem({item, workoutLog, allWorkoutDetails, setAllWorkoutDetails, clearFormData, setClearFormData}){
  const [formData, setFormData] = useState([])
  const [sets, setSets] = useState(1);

  useEffect(() => {
    function updateFormData() {
      let inputDataArray = formData.map(inputObj => ({...inputObj}));
      while (inputDataArray.length < sets) inputDataArray.push({weight: 1, reps: 1})
      while (inputDataArray.length > sets) inputDataArray.pop();
      setFormData(inputDataArray);
    }
    updateFormData();
    }, [sets]);

  useEffect(() => {
    function clearFormDataEffect() {
      if (clearFormData) {
        console.log('useEffect for clearFormData', clearFormData)
        setFormData([]);
        setSets(1);
      }
      setClearFormData(false);
    }
    clearFormDataEffect();
    }, [clearFormData]);

    function handleChange(evt, index) {
      let updatedFormData = formData.map((inputObj, idx) => {
        if (idx === index) return {...inputObj, [evt.target.name]: Number(evt.target.value)};
        else return {...inputObj}
      })
      setFormData(updatedFormData);
      const newWorkoutDetails = {
        exercise: item._id, 
        setsDetails: updatedFormData
      }
      const filteredAllWorkoutDetails = allWorkoutDetails.filter(w => w.exercise !== item._id)
      setAllWorkoutDetails([...filteredAllWorkoutDetails, newWorkoutDetails])
    }
  
  function resetFormData() {
    setFormData([]);
    setSets(1);
  }
   

  return (
    <>
      <div>
        <h5>{item.name}</h5>
        <form id='add-workout'>
          <label>Total sets</label>
        <input value={sets} min={1} max={5} type="number" onChange={(evt) => setSets(Number(evt.target.value))}/>
        {formData.map((inputObj, idx) => (
          <div key={idx}>
            <label>ID:{item._id} </label>
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

// update the use state in the above component that (overall form data) set form data fort that one will go down to each component and update everything .
// put in exercise upfront. 