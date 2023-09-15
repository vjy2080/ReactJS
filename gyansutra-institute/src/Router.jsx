import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './CommonCompo/about.jsx';
import Header from './CommonCompo/Header';
import Login from './LoginPage/Login';
import Signup from './LoginPage/Registration';
import Home from './CommonCompo/Home.jsx';
import AdminDash from './CommonCompo/AdminDash.jsx';


const Router = createBrowserRouter([



    {
        path: "/",
        element: <>
            <Header /><Home />
        </>,
    },
    {
        path: "/about",
        element: <>
            <Header /><About />
        </>,
    },
    {
        path: "/signup",
        element: <>
            <Header /><Signup />
        </>,
    },
    {
        path: "/login",
        element: <>
            <Header /><Login />
        </>,
    },
    {
        path: "/adminDash",
        element: <>
            <Header /><AdminDash />
        </>,
    },

]);


export default Router;


