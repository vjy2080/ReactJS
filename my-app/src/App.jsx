import React from 'react';
import FirstIntro from './01_Intro';
import Practical from './Practical1';
import Babel from './02_BabelInReactJs';
import Componcent from './03_CustomCompo';
import Router from './Component/CommonComponent/Router';


const App = () => {
    return (
        <>
         <FirstIntro/>
         <Practical/>   
         <Babel/>   
         <Componcent/>   
         <Router/>
        </>
    );
};

export default App;