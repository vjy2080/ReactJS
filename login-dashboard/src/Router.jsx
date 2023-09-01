import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import App from './components/App/App';
import Login from './components/Login/Login';



const Router = createHashRouter([

    {
        path: "/",
        element: <><App /> <Login /></>,
        children: [

            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/preferences",
                element: <Preferences />,
            }]
    },

]);


export default Router;


