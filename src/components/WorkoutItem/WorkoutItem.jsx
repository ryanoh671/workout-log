import { useState } from 'react';
import './WorkoutItem.css';
import NumericInput from 'react-numeric-input';

export default function WorkoutItem({item}){
  const [dataInput, setDataInput] = useState([
    { weight: '', reps: null}
  ]);
  
  const [sets, setSets] = useState(1);

  // function handleChange(evt) {
  //   const inputData = evt.target.value;
  //   setDataInput(inputData); 
  // }

  // async function handleSearch(evt) {
  //   evt.preventDefault();
  //   const results = await exercisesAPI.search(search);
  //   console.log(results);
  //   setSearchedExercises(results);
  // } 

  return (
    <>
      <div>
        <h5>{item.name}</h5>
        <form>
          <label>Set #</label>
          <NumericInput type='number' min={1} max={5} value={sets} onchange={(evt) => setSets(Number(evt.target.value))} />
        </form>
      </div>
    </>
  )
}; 