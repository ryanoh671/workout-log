import { useState } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  
  

  function handleChange(evt) {
    const searchData = evt.target.value;
    setSearch(searchData); 
  }

  async function handleSearch(evt) {
    evt.preventDefault();
    const results = await exercisesAPI.search(search);
    console.log(results);
    setExercises(results);
  } 
  
  return (
    <>
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <label>Search For Exercises Here</label>
        <input type="text" name='search' value={search} placeholder="search for exercises" onChange={handleChange}/>
        <button type="submit">SEARCH</button>
      </form>
      {exercises.map(e => <h5 key={e.id}>{e.name}<img src={e.gifUrl}/></h5>)}
    </>
  )
}