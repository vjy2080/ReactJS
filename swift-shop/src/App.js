import React from 'react';
import Headers from './Component/Header.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import { Routes,Route } from 'react-router-dom';


const App = () => {
    return (
      <>
      <Headers/>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            </Routes>
      </>
    );
};

export default App;