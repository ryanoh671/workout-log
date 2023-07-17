import { Link } from 'react-router-dom';
import './WelcomePage.css';


export default function WelcomePage({user}) {
  return (
    <>
      <div className='welcome-page'> 
      
      {user ?
      <Link to="/search">
        <img className='welcome-img' src="https://i.imgur.com/uG18UNN.png" alt="" />
      </Link>
      :
      <Link to="/auth">
        <img className='welcome-img' src="https://i.imgur.com/uG18UNN.png" alt="" />
      </Link>
      }
        {/* <p>Lift, Track, Repeat</p>
        <p className='welcome-msg'>-- Check out the most effective exercises --</p> */}
        {/* <Link>Search Exercises</Link> */}
      </div> 
    </>
  );
}