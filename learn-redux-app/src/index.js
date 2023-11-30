import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store from './store'
import Header from './Header';

console.log("index.js");
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
    <><Header /><App /></>
  </Provider>
);
