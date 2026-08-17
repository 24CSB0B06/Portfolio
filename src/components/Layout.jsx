import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ theme, onToggleTheme }) {
  return (
    <div className="app-container">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
