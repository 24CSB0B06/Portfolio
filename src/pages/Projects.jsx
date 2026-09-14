import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';
import LoadingSpinner from '../components/LoadingSpinner';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects`);
      if (!response.ok) {
        throw new Error(`Failed to fetch projects (Server returned status ${response.status})`);
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.error('Error loading projects:', err);
      setError(err.message || 'Unable to connect to the backend server. Please make sure the API server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="section-container">
      <h2 className="section-title">My Projects</h2>
      <p className="contact-lead">
        Explore a curated selection of full-stack systems, smart monitoring solutions, and interactive web tools.
      </p>

      {isLoading && (
        <LoadingSpinner message="Fetching projects from backend API..." />
      )}

      {!isLoading && error && (
        <div className="error-container" style={{ textAlign: 'center', padding: '30px', margin: '20px 0' }} role="alert">
          <div className="form-error-banner" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid #ef4444', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
            ⚠️ <strong>Error Loading Data:</strong> {error}
          </div>
          <button onClick={fetchProjects} className="btn btn-primary">
            🔄 Retry Loading
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <ProjectList projectsList={projects} />
      )}
    </section>
  );
}

