import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from './home.jsx';
import Product from './Component/product.jsx';
import Header from './Component/Header.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <><Header /> <Home /></>,
    }, {
        path: "/about",
        element: <><Header /> <About /></>,
    }, {
        path: "/product",
        element: <><Header /> <Product /></>,
    }, {
        path: "/contact",
        element: <><Header /> <Contact /></>,

    },
]);

export default router
