import './WorkoutDetail.css';

export default function WorkoutDetail({workoutDetail}) {
  return (
  <div class="card" className="workoutDetail">
    <div>
      <h1>Workout Detail</h1>
      {workoutDetail}
      <ul>
        <li>first workout</li>
        <li>second workout</li>
        <li>third workout</li>
      </ul>
      <button>Finish Workout</button>
    </div>
  </div>
  )
};