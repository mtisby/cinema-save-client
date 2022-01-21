import React from 'react';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

// style sheets
import './index.css';

// pages
import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'
import ShowMovie from './pages/ShowIndMovie'
import ShowIndBoard from './pages/ShowIndBoard'

const rootElement = document.getElementById("root");
render(
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/profile/:id"} element={<Profile />} />
          <Route path={process.env.PUBLIC_URL + "/profile/:id/board/:id"} element={<ShowIndBoard />} />
          <Route path={process.env.PUBLIC_URL + "/register"} element={<Register />} />
          <Route path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
          <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<ShowMovie />} />
        </Routes>
    </HashRouter>,
  rootElement   
);
