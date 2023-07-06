import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header.jsx';
import MainContent from './Component/MainContent.jsx';
import vjy from "vjy()";


const vjy = () => {
    return (
        <div>
         test   
        </div>
    );
};

export default vjy;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<><vjy/><Header/><MainContent/></>);