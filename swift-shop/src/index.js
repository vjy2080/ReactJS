import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.jsx';
// import Router from './router.jsx';
import {  RouterProvider, } from "react-router-dom";
import routerdata from './router.jsx';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<><Home/></>);
// root.render(<><RouterProvider router={routerdata} /></>);

