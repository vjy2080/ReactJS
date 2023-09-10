import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './about.jsx';
import Header from './CommonCompo/Header';
import Login from './LoginPage/Login';
import Signup from './LoginPage/test';



const Router = createBrowserRouter([

    {
        path: "/",
        element: <>
            <Header /><App />
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
            <Header /><Login onLogin={onLogin} />
        </>,
    },

]);


export default Router;


