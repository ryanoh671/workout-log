import { useState } from 'react';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': 'be4ccde476msh3cf043e68e15931p17e660jsn5ea2b4817efe',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
    
  

  function handleChange(evt) {
    const searchData = evt.target.value;
    setSearch(searchData); 
  }

  async function handleSearch(evt) {
    evt.preventDefault();

    try {
      const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', options);
      const data = await response.json();
      console.log(data);
      setExercises(data);
    } catch (error) {
      console.error(error);
    }
    // const searchData = await fetch('https://exercisedb.p.rapidapi.com/exercises')
    // const data = await searchData.json();
    // console.log(searchData);
  } 

  return (
    <>
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <label>Search For Exercises Here</label>
        <input type="text" name='search' value={search} placeholder="search for exercises" onChange={handleChange}/>
        <button type="submit">SEARCH</button>
      </form>
      <h3>{exercises.map(property => property.name)}</h3>
    </>
  )
}