import { useState } from 'react';
import WorkoutPageDetails from '../../components/WorkoutPageDetails/WorkoutPageDetails';

export default function WorkoutPage({userWorkouts, setUserWorkouts}) {

  // const selectWorkout = userWorkouts.map(w => w.date)
  // console.log(selectWorkout, 'select Worktou')

  const workoutDetails = userWorkouts.map(w => <WorkoutPageDetails userWorkouts={userWorkouts} key={w._id} 
    w={w} setUserWorkouts={setUserWorkouts}/>)

  return (
    <div className='card'>
      {/* <select>
        <option value="someOption">SomeOption</option>
        <option value="otherOption">OtherOption</option>
        {selectWorkout.map(date => 
          <option>{date}</option>
          )}
      </select> */}
      {workoutDetails}
    </div>
  )
}
