import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <h3>Strive for Progress</h3>
      <Link to="/search">
        <button>Search for Exercises</button>
      </Link>
    </main>
  );
}