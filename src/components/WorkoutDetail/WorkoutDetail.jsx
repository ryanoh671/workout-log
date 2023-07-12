import './WorkoutDetail.css';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import { Link } from 'react-router-dom';

export default function WorkoutDetail({workoutLog}) {
  console.log(workoutLog)
  const workoutItem = workoutLog.map(item => <WorkoutItem item={item} />);
  // const workoutItems = workoutLog.map(item => item.name)



  return (
  <div className="workoutDetail">
      <h1>Workout Items</h1>
        <ul>{workoutItem}</ul>
      <button>Finish Workout</button>
  </div>
  )
};