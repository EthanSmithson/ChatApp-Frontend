import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='home' element={<HomePage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;