import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './CommonCompo/about.jsx';
import Header from './CommonCompo/Header';
import Login from './LoginPage/Login';
import Signup from './LoginPage/Registration';
import Home from './CommonCompo/Home.jsx';
import AdminDash from './Admin/AdminDash.jsx';


const Router = createBrowserRouter([



    {
        path: "/",
        element: <>
            <Home />
        </>,
    },
    {
        path: "/about",
        element: <>
            <About />
        </>,
    },
    {
        path: "/signup",
        element: <>
            <Signup />
        </>,
    },
    {
        path: "/login",
        element: <>
            <Login />
        </>,
    },
    {
        path: "/adminDash",
        element: <>
           <Header/> <AdminDash />
        </>,
    },

]);


export default Router;


