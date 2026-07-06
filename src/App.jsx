import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AIPage from './pages/AIPage.jsx';
import ContentPage from './pages/ContentPage.jsx';
import ProfilePage from './pages/Profile.jsx';
import './App.css'
import styles from './styles/Globals.module.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/content" element={<ContentPage />}/>
        <Route path="/perfil" element={<ProfilePage/>}/>
      </Routes>
    </Router>
  );
}

export default App
