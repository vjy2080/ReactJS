import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './LoginPage';
import { createBrowserRouter } from 'react-router-dom'
import NavBar from './Navbar';



const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavBar /><Home /></>,
  },
  {
    path: "/about",
    element: <><NavBar /><About /></>,
  },
  {
    path: "/contact",
    element: <><NavBar /><Contact /></>,
  },
  {
    path: "/login",
    element: <><NavBar /><Login /></>,
  },
]);

export default router;


