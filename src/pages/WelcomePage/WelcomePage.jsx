import { Link } from 'react-router-dom';
import './WelcomePage.css';


export default function WelcomePage() {
  return (
    <>
      <div className='welcome-page'> 
        <img className='welcome-img' src="https://i.imgur.com/2OX1v9N.png" alt="" />
        <p>Lift, Track, Repeat</p>
        <p className='welcome-msg'>-- Check out the most effective exercises --</p>
        {/* <Link>Search Exercises</Link> */}
      </div> 
    </>
  );
}