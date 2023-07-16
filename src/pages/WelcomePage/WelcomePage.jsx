import { Link } from 'react-router-dom';
import './WelcomePage.css';


export default function WelcomePage() {
  return (
    <>
      <div className='welcome-page'> 
        <p>Strive for Progress, Never give up</p>
        <img className='welcome-img' src="https://i.imgur.com/2OX1v9N.png" alt="" />
      </div> 
    </>
  );
}