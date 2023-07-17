import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar navbar-light bg-dark '>
      { user ?
       <>
      <div className='links'>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/search">Search for Exercises</Link>
        &nbsp; | &nbsp;
        <Link to="/workouts">My Workouts</Link>
      </div>
      <div>
      <span>Welcome, {user.name}!</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
      </> 
      :
      <span>
        <Link to="/auth">Login / Sign Up</Link>
      </span>
    }
    </nav>
  );
}