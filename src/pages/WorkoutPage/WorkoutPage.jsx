import { useState } from 'react';
import WorkoutPageDetails from '../../components/WorkoutPageDetails/WorkoutPageDetails';

export default function WorkoutPage({userWorkouts}) {
  console.log(userWorkouts,'111')
  const [show, setShow] = useState(false);

  const selectWorkout = userWorkouts.map(w => w.date)
  console.log(selectWorkout, 'select Worktou')

  const workoutDetails = userWorkouts.map(w => <WorkoutPageDetails userWorkouts={userWorkouts} key={w._id} 
    w={w} />)
  console.log(workoutDetails, 'workoutDetails')

  return (
    <div>
      <select>
        {/* <option value="someOption">SomeOption</option>
        <option value="otherOption">OtherOption</option> */}
        {selectWorkout.map(date => 
          <option>{date}</option>
          )}
      </select>
      {workoutDetails}
    </div>
  )
}
