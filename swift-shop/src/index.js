import React from 'react';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";


createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

