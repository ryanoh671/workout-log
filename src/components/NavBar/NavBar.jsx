import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar navbar-light justify-content-center bg-light'>
      { user ?
       <>
      <span>Welcome, {user.name}!</span>
      &nbsp; | &nbsp;
      <Link to="/search">Search for Exercises</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      </> 
      :
      <Link to="/auth">Login or Sign Up</Link>
    }
    </nav>
  );
}