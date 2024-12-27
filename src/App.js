import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='login' element={<LoginPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;