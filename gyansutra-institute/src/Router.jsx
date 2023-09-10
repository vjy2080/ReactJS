import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './about.jsx';
import Header from './CommonCompo/Header';
import Login from './LoginPage/Login';



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
        path: "/login",
        element: <>
            <Header /><Login />
        </>,
    },

]);


export default Router;


