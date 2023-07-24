import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<News pageSize={6} category="science" />} />
        <Route path="/business" element={<News pageSize={6} category="business" />} />
        <Route path="/entertainment" element={<News pageSize={6} category="entertainment" />} />
        <Route path="/general" element={<News pageSize={6} category="general" />} />
        <Route path="/health" element={<News pageSize={6} category="health" />} />
        <Route path="/science" element={<News pageSize={6} category="science" />} />
        <Route path="/sports" element={<News pageSize={6} category="sports" />} />
        <Route path="/technology" element={<News pageSize={6} category="technology" />} />

      </Routes>
    </BrowserRouter>
  );
}

