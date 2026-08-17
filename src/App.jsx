import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  // Requirement 2.2 & 2.3: Theme state lifted to top-level App component with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Persist theme to localStorage and set HTML root attribute whenever theme state changes (Requirement 2.3)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout theme={theme} onToggleTheme={handleToggleTheme} />}>
        {/* Home routes (/ and /Home) */}
        <Route index element={<Home />} />
        <Route path="Home" element={<Navigate to="/" replace />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        {/* Core application routes */}
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        
        {/* Dynamic Route (Requirement 2.4) */}
        <Route path="projects/:projectId" element={<ProjectDetail />} />
        
        <Route path="contact" element={<Contact />} />

        {/* 404 Catch-All Route (Requirement 2.4) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
