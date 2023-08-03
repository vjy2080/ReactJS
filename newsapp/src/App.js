import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const pageSize = 6;

const App = () => {
  const [progress, setProgress] = useState(0)
  // export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />


      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} category="general" />} />
        <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App

