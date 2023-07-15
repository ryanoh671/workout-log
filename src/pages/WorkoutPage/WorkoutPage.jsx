import { useState } from 'react';

export default function WorkoutPage({userWorkouts}) {
  console.log(userWorkouts,'111')
  const [show, setShow] = useState(false);



  return (
    <>
    <h1>Workout Page</h1>
    {userWorkouts.map(w => (
      <div key={w._id} className='card'>
        <h3>{new Date(w.date).toLocaleString()}</h3>
        
        <div>
          <h3>{w.notes}</h3>
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
        
        <button onClick={() => setShow(true)}>show details</button>
        
      </div>
    ))}
    </>
  )
}
