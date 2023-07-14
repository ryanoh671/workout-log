import { useState } from 'react';
import './WorkoutDetail.css';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import { Link } from 'react-router-dom';
import * as workoutsAPI from '../../utilities/workouts-api';

export default function WorkoutDetail({workoutLog}) {
  const [clearFormData, setClearFormData] = useState(false);
  const [allWorkoutDetails, setAllWorkoutDetails] = useState([]);
  const [formData, setFormData] = useState({
    date: new Date(), 
    notes: ''
  });

  const workoutItem = workoutLog.map(item => 
    <WorkoutItem
      key={item._id} 
      item={item} 
      workoutLog={workoutLog} 
      allWorkoutDetails={allWorkoutDetails} 
      setAllWorkoutDetails={setAllWorkoutDetails}
      clearFormData={clearFormData}
      setClearFormData={setClearFormData}
    />);

  async function handleAddToWorkout(evt) {
    evt.preventDefault();
    // const allUserWorkouts = await workoutsAPI.createWorkout({
    //   exerciseDetails: allWorkoutDetails,
    //   workoutDetails: formData
    // });
    // console.log(allUserWorkouts)
    // setFormData({
    //   date: new Date(), 
    //   notes: ''
    // });
    setAllWorkoutDetails([]);
    setClearFormData(true);
  }

  function handleChange(evt) {
    let updatedFormData = evt.target.name === "date" ? {...formData, [evt.target.name]: new Date(evt.target.value)} : {...formData, [evt.target.name]: evt.target.value}
    setFormData(updatedFormData);
  }

  return (
  <div className="workoutDetail">
      <h1>Workout Items</h1>
      <form>
        <label>Date: </label>
        <input value={formData.date.toISOString().split('T')[0]} name="date" type="date" onChange={handleChange}/>
        <label>Notes: </label>
        <input value={formData.notes} name="notes" type="text" onChange={handleChange}/>
      </form>
        <ul>{workoutItem}</ul>
        <button onClick={handleAddToWorkout}>Finish Workout</button>
  </div>

  )
};

// state that holds finalized worout log stat and passed to the workout item page. 
