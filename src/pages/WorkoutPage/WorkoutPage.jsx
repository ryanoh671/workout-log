import { useState } from 'react';
import WorkoutPageDetails from '../WorkoutPageDetails/WorkoutPageDetails';

export default function WorkoutPage({userWorkouts}) {
  console.log(userWorkouts,'111')
  const [show, setShow] = useState(false);

  const workoutDetails = userWorkouts.map(w => <WorkoutPageDetails userWorkouts={userWorkouts} key={w._id} 
    w={w} />)
  console.log(workoutDetails, 'workoutDetails')

  return (
    <>
      <h1>Workout Page</h1>
      {workoutDetails}
    </>
  )
}
