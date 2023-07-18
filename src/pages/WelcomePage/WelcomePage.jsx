import { Link } from 'react-router-dom';
import './WelcomePage.css';


export default function WelcomePage({user}) {
  return (
    <div className='welcome-page'> 
      {user ?
      <Link className='link-to-search' to="/search">
        <img className='welcome-img' src="https://i.imgur.com/qVyW0sU.png" alt="" />
      </Link>
      :
      <Link className='link-to-search' to="/auth">
        <img className='welcome-img' src="https://i.imgur.com/qVyW0sU.png" alt="" />
      </Link>
      }
    </div> 
  );
}