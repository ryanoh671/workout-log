export default function ProgressPage({userWorkouts}) {
  console.log(userWorkouts, 'userWorkouts in progress page')

  const oneWorkout = userWorkouts.map(w => w.exercises)
  console.log(oneWorkout, 'oneWorkout exercises')

  return (
    <>
      {/* <p>Progress PAGE</p> */}
    </>
  )
}