import { Link } from 'react-router-dom';

export default function WorkoutItem({item}){
  return (
    <>
    {/* <Link to={`/workout/${item.name}`}> */}
      {item.name}
      <form>
        <label>Set 1: lbs</label>
        <input type="text" />
      </form>
    {/* </Link> */}
    </>
  )
}; 