import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import Router from './Router.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Provider } from 'react-redux';
// import store from './store/CustomStore'

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
  // <Provider store={store}>
  //   <Router />
  // </Provider>
);
