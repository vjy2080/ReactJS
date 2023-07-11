import Header from './Component/Header.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';


import { createBrowserRouter, createHashRouter } from "react-router-dom";
import React,{ Suspense } from "react";


const router = createHashRouter([
    {
        path: "/",
        element: <Home/>,
    }, {
        path: "/about",
        element: <About/>,
    }, {
        path: "/contact",
        element: <Contact/>,
       
    }, 
]);

export default router
  