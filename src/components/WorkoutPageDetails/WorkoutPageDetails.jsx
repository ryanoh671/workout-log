import './WorkoutPageDetails.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as workoutsAPI from '../../utilities/workouts-api';

export default function WorkoutPageDetails({userWorkouts, w, setUserWorkouts, changeFormDataFormat, matchDateFormat }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  
  async function handleDeleteWorkout(w) {
    const newWorkoutList = await workoutsAPI.deleteWorkout(w)
    setUserWorkouts(newWorkoutList);
    navigate('/workouts');
  }

  return (
    <div className='workout-page-details'>
      { show ?
      <div key={w._id}>
        <h4>Date Completed: {new Date(w.date).toLocaleString()}</h4>
        <h4>Notes: {w.notes}</h4>
        <div>
          {w.exercises.map(e => (
            <div key={e._id}>
              <h5>{e.exercise.name}</h5>
              {e.setsDetails.map((d, idx) => (
                <div key={`${e.exercise.name}${idx}`}>
                  <h6>Set {idx+1} lbs: {d.weight} || Set {idx+1} reps: {d.reps}</h6>
                </div>
              ))}
            </div>
            ))}
        </div>
        <button className='button' onClick={() => setShow(false)}>Hide Details</button>
        <div>
        --------------------------------------
        </div>
      </div>
    :
    <>
      <div>
        <h4>Date Completed: {new Date(w.date).toLocaleString()}</h4>
        <h4>Notes: {w.notes}</h4>
        <button className='button' onClick={() => setShow(true)}>show details</button>
        <button className='cancel-btn' onClick={() => handleDeleteWorkout(w)}>Delete X</button>
      </div>
      <div>
        &nbsp;
        --------------------------------------
      </div>
    </>
    }
  </div>
  )
}
