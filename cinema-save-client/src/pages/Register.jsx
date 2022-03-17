import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import {routes} from "../api/routes.js"

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegister] = useState(false);
    const [id, setID] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, email, password };
        let url = routes['handleRegister']

        fetch(url, {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": routes['handleBaseURL']           
            },
            body: JSON.stringify(user),
        }).then((response) => {
            console.log('new user added');
            let req = response.json()
            return req
        }).then((req) => {
            setID(req);
        }).then((req) => {
            setRegister(true);
        })
    }
  
    if (registered === true && id !== " ")  {
        return <Navigate push to={{
            pathname: `/profile/${id}`
          }}
        />
    }

  return (
    <div className="authpg register flex-col-center">
        <div className='authdiv flex-col-center'>
            <div class="welcome">
                <h1>Register</h1>
            </div>
            <form onSubmit={handleSubmit} className="form-div">
                <div class="mb-3 flex-row-end">
                    <label class="form-label">Username</label>
                    <input
                          class="form-control"
                          type="text"
                          id="username"
                          name="username"
                          required
                          onChange={(e) => setUsername(e.target.value)}
                      />
                </div>
                <div class="mb-3 flex-row-end">
                    <label class="form-label" for="email">Email</label>
                    <input
                          class="form-control"
                          type="email"
                          id="email"
                          name="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                      />
                </div>
                <div class="mb-3 flex-row-end">
                    <label class="form-label" for="password">Password</label>
                    <input
                          class="form-control"
                          type="password"
                          id="password"
                          name="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='btn'><button class="btn btn-success">Register</button></div>
            </form>
        </div>
    </div>
  );
}

export default Register;