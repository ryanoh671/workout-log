import { useState, useEffect } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api';
// import BodyParts from '../../components/BodyParts/BodyParts';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import WorkoutLog from '../../components/WorkoutLog/WorkoutLog';
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
    const results = await exercisesAPI.search(search.toLowerCase());
    setSearchedExercises(results);
  } 
  
  return (
    <main className="SearchPage">
      <WorkoutLog workoutLog={workoutLog} setWorkoutLog={setWorkoutLog} setUserWorkouts={setUserWorkouts}/>
      <div className='white'>
        <form className='search-form' onSubmit={handleSearch}>
          <label>Search Exercise:</label>
          <input type="text" name='search' value={search} placeholder="Type in exercise" onChange={handleChange}/>
          <button id="search-btn" type="submit">SEARCH</button>
        </form>
        <ExerciseList searchedExercises={searchedExercises} setWorkoutLog={setWorkoutLog} workoutLog={workoutLog} search={search}/>
      </div>
      </main>
  )
}