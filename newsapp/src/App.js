import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
// import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const pageSize = 6;



export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={pageSize} category="general" />} />
        <Route exact path="/business" element={<News key="business" pageSize={pageSize} category="business" />} />
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment" />} />
        <Route exact path="/health" element={<News key="health" pageSize={pageSize} category="health" />} />
        <Route exact path="/science" element={<News key="science" pageSize={pageSize} category="science" />} />
        <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} category="sports" />} />
        <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} category="technology" />} />

      </Routes>
    </BrowserRouter>
  );
}

