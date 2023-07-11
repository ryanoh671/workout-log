import 'materialize-css/dist/css/materialize.min.css'
import './ExerciseListItem.css';
// import { Link } from 'react-router-dom';


export default function ExerciseListItem({e, handleAddExercise}) {

  
 
  
  return (
    <div class="card" className="ExerciseListItem">
      <p>{e.name}</p>
      <p>{e.target}</p>
      <p>{e.equipment}</p>
      <p><img src={e.gifUrl}></img></p>
      {/* add functionality in handleAddExercise 
      to add to the workout detail card */}
      <button onClick={() => handleAddExercise(e.id)}>ADD TO WORKOUT</button>
    </div>
  )
};
