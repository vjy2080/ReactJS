import React from 'react';
import Header from './Component/Header.jsx';
import Slider from './Component/Slider.jsx';
import MainContent from './Component/MainContent.jsx';
import About from './about.jsx';



import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <><Header/><Slider/><MainContent/>
        <About/></>
    );
};

export default Home;