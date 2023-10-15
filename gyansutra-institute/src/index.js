import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Router from './Router.jsx'
import CustomStore from './Redux/store/CustomStore'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={CustomStore}>
    <RouterProvider router={Router} />
  </Provider>
);
