import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, onToggleTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Demonstrate useEffect cleanup function for window resize listener (Requirement 2.3)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup subscription to prevent memory leak
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-brand">
          Deekshith Akula
        </Link>

        <div className="nav-actions">
          <nav className="main-nav" aria-label="Main Navigation">
            <ul>
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
