import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Splash Page</h1>

      <br/>
      <Link to="/register">
          <p>Register</p>
      </Link>
      <br/>
      <Link to="/login">
          <p>Login</p>
      </Link>
      <br />
    </div>
  );
}

export default App;
