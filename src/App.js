import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GiftHome from './pages/GiftHome';
import CraftHome from './pages/CraftHome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GiftHome />} />
        <Route path="/gift-home" element={<GiftHome />} />
        <Route path="/craft-home" element={<CraftHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
}

export default App;