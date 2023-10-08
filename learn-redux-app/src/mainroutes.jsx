import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HeaderComp from "./includes/HeaderComponent.jsx";
import LoginCompo from "./components/LoginCompoent.jsx";
import AccessStoreData from "./pages/AccessStoreData";
const AdminRouter = React.lazy(() => { return import('./admin/AdminRoute.jsx') })

console.log("Called router");

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComp />
            <HomePage /></>,
    },
    {
        path: "/about",
        element: <><HeaderComp /><AboutPage></AboutPage></>,
    },
    {
        path: "/contact",
        element: <><HeaderComp /><ContactPage /></>,
    }, {
        path: "/login",
        element: <><LoginCompo /></>,
    },
    {
        path: "accessapi",
        element: <AccessStoreData />,
    },
    {
        path: "admin/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><AdminRouter /></Suspense>,
    }
]);


export default MainRouter;

// import React, { Suspense } from "react";
// import { createBrowserRouter, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import AccessStoreData from "./pages/AccessStoreData";
// // console.log("Called router");
// const MainRoutes = createBrowserRouter([
//     {
//         path: "/",
//         element:<HomePage/>,
//     },{
//         path: "accessapi",
//         element:<AccessStoreData/>,
//     }
// ]);
// export default MainRoutes;