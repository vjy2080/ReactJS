import Header from './Component/Header.jsx';
import Slider from './Component/Slider.jsx';
import MainContent from './Component/MainContent.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const home = () => {
    return (
        <><Header/><Slider/><MainContent/></>
    );
};

export default home;