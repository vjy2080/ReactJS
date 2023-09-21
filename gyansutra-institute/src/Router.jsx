import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './CommonCompo/about.jsx';
import Login from './LoginPage/Login';
import Signup from './LoginPage/Registration';
import Home from './CommonCompo/Home.jsx';
import AdminDash from './Admin/AdminDash.jsx';
import SidebarMenu from './CommonCompo/SideBar/SidebarMenu';



const Router = createBrowserRouter([



    {
        path: "/",
        element: <>
            <SidebarMenu />
            <Home />
        </>,
    },
    {
        path: "/about",
        element: <>
            <SidebarMenu />
            <About />
        </>,
    },
    {
        path: "/signup",
        element: <>
            <SidebarMenu />
            <Signup />
        </>,
    },
    {
        path: "/login",
        element: <>
            <SidebarMenu />
            <Login />
        </>,
    },
    {
        path: "/adminDash",
        element: <>
            <SidebarMenu />
            <AdminDash />
        </>,
    },

]);


export default Router;


