import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import App from './components/App/App';



const Router = createHashRouter([

    {
        path: "/",
        element: <App />,
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


