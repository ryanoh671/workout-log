import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import SearchPage from '../SearchPage/SearchPage';
import NavBar from '../../components/NavBar/NavBar';
import WorkoutPage from '../WorkoutPage/WorkoutPage';
import * as workoutsAPI from "../../utilities/workouts-api";



export default function App() {
  const [user, setUser] = useState(getUser());
  const [userWorkouts, setUserWorkouts] = useState([]);

  useEffect(function() {
    async function getUserWorkouts() {
      const data = await workoutsAPI.getUserWorkouts();
      setUserWorkouts(data);
    }
    getUserWorkouts();
  }
  , [user]);


  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* Route components in here */}
        <Route path="/" element={<WelcomePage user={user}/>} />
        <Route path="/auth" element={<AuthPage user={user} setUser={setUser}/>} />
        <Route path="/search" element={<SearchPage setUserWorkouts={setUserWorkouts}/>} />
        <Route path="/workouts" element={<WorkoutPage userWorkouts={userWorkouts} setUserWorkouts={setUserWorkouts}/>} />
        {/* <Route path="/workout/:workoutId" element={<WorkoutDetailPage />} /> */}
      </Routes>
    </main>
  );
}
