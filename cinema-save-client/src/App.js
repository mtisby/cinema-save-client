import { Link } from 'react-router-dom';
import "./App.css"
import {DatePickMe} from '../src/components/datepicker'

function App() {
  return (
    <div className="App flex-col-center">
      <div className='shadow'></div>
      <div className='app-bgimg flex-col-top'></div>

      <DatePickMe />

      <div className='content'>
        <h1>Welcome to Cinema Save</h1>
        
        <div className='flex-row-center'>
          <div className='splash-link'>
            <Link to="/register">
                <p>Register</p>
            </Link>
          </div>
          
          <div className='splash-link'>
            <Link to="/login">
                <p>Login</p>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
