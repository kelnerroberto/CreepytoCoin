import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import DetailedCurrency from './pages/DetailedCurrency';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/asset/:assetname" element={ < DetailedCurrency/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
