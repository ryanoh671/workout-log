import WorkoutPageDetails from '../../components/WorkoutPageDetails/WorkoutPageDetails';
import ProgressPage from '../ProgressPage/ProgressPage';

export default function WorkoutPage({userWorkouts, setUserWorkouts}) {
  const workoutDetails = userWorkouts.map(w => <WorkoutPageDetails userWorkouts={userWorkouts} key={w._id} 
    w={w} setUserWorkouts={setUserWorkouts} />)
    
  return (
      <div>
        <p>Workout History:</p>
        <ProgressPage userWorkouts={userWorkouts}/>
        {workoutDetails}
      </div>
  )
}

