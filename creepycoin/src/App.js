import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Me from './pages/Me';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/me" element={ < Me/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
