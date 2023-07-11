import { useState, useEffect } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api';
// import BodyParts from '../../components/BodyParts/BodyParts';
import ExerciseList from '../../components/ExerciseList/ExerciseList';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [searchedExercises, setSearchedExercises] = useState([]);

  
  // const [bodyParts, setBodyParts] = useState([]);

  // useEffect(function() {
  //   async function exerciseData() {
  //       const url = `${process.env.API_URL}/bodyPartList`;
  //       const options = {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key': process.env.API_KEY,
  //           'X-RapidAPI-Host': process.env.API_HOST
  //         }
  //       };
  //       const bodyPartsData = await fetch(url);
  //       const results = await bodyPartsData.json();
  //       console.log(results, "bodyparts data");
  //       // setBodyParts([...results]);
  //   }
  //   exerciseData();
  // }, []);

  function handleChange(evt) {
    const searchData = evt.target.value;
    setSearch(searchData); 
  }

  async function handleSearch(evt) {
    evt.preventDefault();
    const results = await exercisesAPI.search(search);
    console.log(results);
    setSearchedExercises(results);
  } 
  
  return (
    <>
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <label>Search For Exercises Here</label>
        <input type="text" name='search' value={search} placeholder="search for exercises" onChange={handleChange}/>
        <button type="submit">SEARCH</button>
      </form>
      {/* <BodyParts bodyParts={bodyParts}/> */}
      <ExerciseList searchedExercises={searchedExercises} />
    </>
  )
}