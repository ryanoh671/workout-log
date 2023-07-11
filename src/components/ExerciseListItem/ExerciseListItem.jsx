import 'materialize-css/dist/css/materialize.min.css'
import './ExerciseListItem.css';


export default function ExerciseListItem({e, handleAddExercise}) {

  
 
  
  return (
    <div class="card" className="ExerciseListItem">
      <p>{e.name}</p>
      <p>{e.target}</p>
      <p>{e.equipment}</p>
      <p><img src={e.gifUrl}></img></p>
        <button onClick={() => handleAddExercise(e.id)}>ADD</button>
    </div>
  )
};
