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
          <Route path="/cinema-save-client/" exact element={<App />} />
          <Route path="/cinema-save-client/home" exact element={<Home />} />
          <Route path="/cinema-save-client/profile/:id" exact element={<Profile />} />
          <Route path="/cinema-save-client/profile/:id/board/:id" exact element={<ShowIndBoard />} />
          <Route path="/cinema-save-client/register" exact element={<Register />} />
          <Route path="/cinema-save-client/login" exact element={<Login />} />
          <Route path="/cinema-save-client/movie/:id" exact element={<ShowMovie />} />
        </Routes>
    </HashRouter>,
  rootElement   
);
