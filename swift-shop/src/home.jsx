import React from 'react';
import Slider from './Component/Slider.jsx';
import MainContent from './product.jsx';



import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <Slider/>
            <MainContent />
        </>
    );
};

export default Home;