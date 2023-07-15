import {useState} from 'react';

export default function WorkoutPageDetails({userWorkouts, w, key}) {
  const [show, setShow] = useState(false);

  return (
  <>
    { show ?
    <>
      <div key={w._id} className='card'>
        
          <div>
           
            {w.exercises.map(e => (
              <div key={e._id}>
                <h3>{e.exercise.name}</h3>
                {e.setsDetails.map((d, idx) => (
                  <div key={`${e.exercise.name}${idx}`}>
                    <h3>Set {idx+1}lbs: {d.weight} reps: {d.reps}</h3>
                  </div>
                ))}
              </div>
              ))}
          </div>
      </div>
      </>
          :
          <>
          <h3>{new Date(w.date).toLocaleString()}</h3>
          <h3>{w.notes}</h3>
        <button onClick={() => setShow(true)}>show details</button>
        </>
                }
        
        
  </>
  )
}