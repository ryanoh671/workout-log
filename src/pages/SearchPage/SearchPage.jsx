import { useState, useEffect } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api';
// import BodyParts from '../../components/BodyParts/BodyParts';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';
import './SearchPage.css';

export default function SearchPage({setUserWorkouts}) {
  const [search, setSearch] = useState('');
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [workoutLog, setWorkoutLog] = useState([]);

  function handleChange(evt) {
    const searchData = evt.target.value;
    setSearch(searchData); 
  }

  async function handleSearch(evt) {
    evt.preventDefault();
    const results = await exercisesAPI.search(search);
    // console.log(results);
    setSearchedExercises(results);
  } 
  
  return (
    <main className="SearchPage">
      <WorkoutDetail workoutLog={workoutLog} setUserWorkouts={setUserWorkouts}/>
      <aside>
        <h1>Search Page</h1>
        <form onSubmit={handleSearch}>
          <label>Search For Exercises Here</label>
          <input type="text" name='search' value={search} placeholder="Type in exercise" onChange={handleChange}/>
          <button type="submit">SEARCH</button>
        </form>
        <ExerciseList searchedExercises={searchedExercises} setWorkoutLog={setWorkoutLog} workoutLog={workoutLog}/>
      </aside>
      </main>
  )
}