import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { routes } from '../api/routes';
import {ReactSession} from 'react-client-session';


function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedin, setLogin] = useState(false);
    const [id, setID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };

        fetch(routes['handleLogin'], {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": routes['handleBaseURL']           
            },
            body: JSON.stringify(user),
        }).then((response) => {
            console.log('logged in');
            let req = response.json()
            return req
        }).then((req) => {
            if (req !== 'success') {
                setID(req.user_id);
                setLogin(true);
                ReactSession.set("username", req.username);
                ReactSession.set("userid", req.user_id);
            }
        })
    }

    if (loggedin === true && id !== " ") {
        return <Navigate push to={{
            pathname: `/profile/${id}`
          }}
        />
    }
  
  return (
    <div className="login">
        <div className="welcome">
            <h1>Login</h1> 
        </div>
        <form onSubmit={handleSubmit.bind(this)}>
            <div className="mb-3">
                <label className="form-label" htmlFor="username">Username</label>
                <input
                      className="form-control"
                      type="text"
                      id="username"
                      name="username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                  />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
    </div>
  );
}

export default Login;