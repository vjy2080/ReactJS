import React from 'react';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

