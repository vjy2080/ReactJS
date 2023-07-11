import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.jsx';
import Router from './router.jsx';
import {  RouterProvider, } from "react-router-dom";
import routerdata from './router.jsx';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<><BrowserRouter><App/></BrowserRouter></>);
// root.render(<><RouterProvider router={routerdata} /></>);

