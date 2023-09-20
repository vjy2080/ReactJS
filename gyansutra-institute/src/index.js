import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css';
import Router from './Router.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from './CommonCompo/SideBar/SidebarMenu';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <Sidebar />
  <RouterProvider router={Router} />
);
