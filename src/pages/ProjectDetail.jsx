import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects/${projectId}`);
        if (response.status === 404) {
          setError(`Project not found with ID: ${projectId}`);
          setProject(null);
          return;
        }
        if (!response.ok) {
          throw new Error(`Failed to load project details (Server status ${response.status})`);
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error('Error fetching project detail:', err);
        setError(err.message || 'Unable to connect to backend server.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectDetail();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="section-container">
        <LoadingSpinner message="Fetching project case study..." />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="section-container">
        <div className="project-detail-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Project Not Found</h2>
          <p className="contact-lead">
            {error || `Sorry, we could not find any project matching ID: ${projectId}.`}
          </p>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '20px' }}>
            ← Back to All Projects
          </Link>
        </div>
      </div>
    );
  }


  const { title, fullDescription, techStack, githubLink, liveLink, details } = project;

  return (
    <section className="section-container">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-detail-container">
        <div className="project-detail-header">
          {details?.category && <span className="project-category-badge">{details.category}</span>}
          <h1>{title}</h1>
          <div className="project-detail-meta">
            {details?.role && <span><strong>Role:</strong> {details.role}</span>}
            {details?.timeline && <span><strong>Timeline:</strong> {details.timeline}</span>}
          </div>
        </div>

        <p className="project-detail-description">{fullDescription}</p>

        <div className="project-detail-section">
          <h3>Tech Stack & Tools</h3>
          <div className="project-tech">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-tag" style={{ padding: '8px 14px', fontSize: '0.9rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {details?.keyFeatures && details.keyFeatures.length > 0 && (
          <div className="project-detail-section">
            <h3>Key Features & Capabilities</h3>
            <ul className="feature-list">
              {details.keyFeatures.map((feature, idx) => (
                <li key={idx}>
                  <span className="feature-bullet">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {details?.architecture && (
          <div className="project-detail-section">
            <h3>System Architecture</h3>
            <p className="about-bio" style={{ margin: '0', textAlign: 'left', fontSize: '1rem' }}>
              {details.architecture}
            </p>
          </div>
        )}

        <div className="hero-actions" style={{ marginTop: '36px', justifyContent: 'flex-start' }}>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Code on GitHub ↗
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
