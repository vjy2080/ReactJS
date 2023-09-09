import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './CommonCompo/Header';



const Router = createBrowserRouter([

    {
        path: "/",
        element: <>
      <Header/>
        <App />
        </>,
        children: [

            {
                // path: "/dashboard",
                // element: <Dashboard />,
            },
            {
                // path: "/preferences",
                // element: <Preferences />,
            }]
    },

]);


export default Router;


