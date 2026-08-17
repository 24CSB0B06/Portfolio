import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Requirement 2.3: Simulate mount loading sequence with useEffect & cleanup timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup timer to prevent memory leaks if component unmounts early
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner message="Initializing Deekshith's Portfolio..." />;
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="avatar-wrapper">
          <img
            src="/assets/images/profile.png"
            alt="Profile picture of Deekshith Akula"
            className="profile-img"
          />
        </div>

        <span className="hero-greeting">Hello, I'm</span>
        <h1>Deekshith Akula</h1>

        <p className="hero-subtitle">
          Computer Science Engineering Student at NIT Warangal, passionate about{' '}
          <span className="highlight-text purple">Full Stack Development</span>,{' '}
          <span className="highlight-text cyan">Problem Solving</span>, and{' '}
          <span className="highlight-text pink">Database Systems</span>.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
