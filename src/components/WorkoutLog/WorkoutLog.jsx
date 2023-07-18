import { useState } from 'react';
import './WorkoutLog.css';
import WorkoutLogItem from '../WorkoutLogItem/WorkoutLogItem';
import { Link, useNavigate } from 'react-router-dom';
import * as workoutsAPI from '../../utilities/workouts-api';


export default function WorkoutLog({workoutLog, setUserWorkouts, setWorkoutLog}) {
  const navigate = useNavigate();
  const [clearFormData, setClearFormData] = useState(false);
  const [allWorkoutDetails, setAllWorkoutDetails] = useState([]);
  const [formData, setFormData] = useState({
    date: new Date(), 
    notes: ''
  });
  // const workoutDetail = allWorkoutDetails.map(w => w.exercise)
  const workoutItem = workoutLog.map(item => 
    <WorkoutLogItem
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
    console.log(allWorkoutDetails)
    const allUserWorkouts = await workoutsAPI.createWorkout({
      exerciseDetails: allWorkoutDetails,
      workoutDetails: formData
    });
    setFormData({
      date: new Date(), 
      notes: ''
    });
    setAllWorkoutDetails([]);
    setClearFormData(true);
    setUserWorkouts(allUserWorkouts);
    navigate("/workouts")
  }

  function handleChange(evt) {
    let updatedFormData = evt.target.name === "date" ? {...formData, [evt.target.name]: new Date(evt.target.value)} : {...formData, [evt.target.name]: evt.target.value}
    setFormData(updatedFormData);
  }

  return (
  <div className='white'>
      { workoutLog.length ? 
      <div className="workout-log">
        <button className='button' onClick={handleAddToWorkout}>Save Workout</button>
        <button className='cancel-btn' onClick={() => setWorkoutLog([])}>Cancel Workout</button>
        <form className="notes-date">
          <label>Date: </label>
          <input value={formData.date.toISOString().split('T')[0]} name="date" type="date" onChange={handleChange}/>
          <label>Notes: </label>
          <input value={formData.notes} name="notes" type="text" onChange={handleChange}/>
        </form>
      </div>
      :
      <div className='log-title'>
        <h6>Workout Log empty - add exercise</h6>
      </div>
      }
      {workoutItem}
  </div>
  )
};

