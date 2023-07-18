import { useState } from 'react';
import WorkoutPageDetails from '../../components/WorkoutPageDetails/WorkoutPageDetails';
import ProgressPage from '../ProgressPage/ProgressPage';

export default function WorkoutPage({userWorkouts, setUserWorkouts}) {
  const [dateFormData, setDateFormData] = useState({
    date: new Date(), 
  });
  const [dateMatched, setDateMatched] = useState(false);
  
  let updatedDateFormat = dateFormData.date.toLocaleDateString();
  console.log(updatedDateFormat, 'updatedDateFormat')
  
  const userWorkoutDates = userWorkouts.map(w => w.date)
  const matchedDateFormat = userWorkoutDates.map(d => d.split('T')[0].replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1'));
  console.log(matchedDateFormat, 'matchedDateFormat')
  
  
  const workoutDetails = userWorkouts.map(w => <WorkoutPageDetails userWorkouts={userWorkouts} key={w._id} 
    w={w} setUserWorkouts={setUserWorkouts} />)
    
  function handleChange(evt) {
    let updatedDateFormData = {...dateFormData, [evt.target.name]: new Date(evt.target.value)};
    setDateFormData(updatedDateFormData);
    checkMatch()
    // setDateMatched();
  }

  function checkMatch() {
    if (matchedDateFormat.includes(updatedDateFormat)) {
      console.log('matched!')
    } else {
      console.log('did not match')
    }
  }

  return (
    <> 
      {/* <form action="">
        <label>Select Date:</label>
        <input type="date" value={dateFormData.date.toISOString().split('T')[0]} name="date" onChange={handleChange}/>
      </form>   */}
      <div>
        <ProgressPage userWorkouts={userWorkouts}/>
        {workoutDetails}
      </div>
    </>
  )
}

