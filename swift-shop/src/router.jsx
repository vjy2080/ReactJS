import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from './home.jsx';
import Product from './product.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }, {
        path: "/about",
        element: <About />,
    }, {
        path: "/product",
        element: <Product />,
    }, {
        path: "/contact",
        element: <Contact />,

    },
]);

export default router
