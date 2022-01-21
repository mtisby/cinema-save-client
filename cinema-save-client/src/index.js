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
          <Route exact path="/" element={<App />} />
          <Route path="/cinema-save-client/home" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/board/:id" element={<ShowIndBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<ShowMovie />} />
        </Routes>
    </HashRouter>,
  rootElement   
);
