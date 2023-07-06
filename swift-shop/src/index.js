import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header.jsx';
import Slider from './Component/Slider.jsx';
import MainContent from './Component/MainContent.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<><Header/><Slider/><MainContent/></>);