import './WorkoutPageDetails.css';
import {useState} from 'react';

export default function WorkoutPageDetails({userWorkouts, w, key}) {
  const [show, setShow] = useState(false);

  return (
    <div className='card'>
      { show ?
      <div key={w._id}>
        <h4>{new Date(w.date).toLocaleString()}</h4>
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
      </div>
      
    :
    <div>
      <h4>{new Date(w.date).toLocaleString()}</h4>
      <h4>{w.notes}</h4>
      <button className='button' onClick={() => setShow(true)}>show details</button>
    </div>
    }
  </div>
  )
}