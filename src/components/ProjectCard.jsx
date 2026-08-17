import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ProjectCard - Generic reusable component receiving project data strictly via props.
 * Demonstrates component-scoped useState for independent 'View Details' inline expansion.
 */
export default function ProjectCard({
  id,
  title,
  shortDescription,
  techStack = [],
  bgClass = '',
  bgImage = '',
  githubLink,
  details = {}
}) {
  // Independent state scoped per component instance (Requirement 2.2)
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const cardStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' } : {};

  return (
    <article className={`project-card ${bgClass}`} style={cardStyle}>
      <div className="project-card-overlay"></div>
      <div className="project-card-content">
        <div>
          <h3>{title}</h3>
          <p>{shortDescription}</p>

          <div className="project-tech">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="project-card-actions">
            <button
              type="button"
              className="project-btn"
              onClick={toggleExpand}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Hide Details ▲' : 'View Quick Details ▼'}
            </button>

            <Link to={`/projects/${id}`} className="project-btn primary-link">
              Full Case Study ↗
            </Link>

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub ↗
              </a>
            )}
          </div>

          {/* Component-level expanded content (independent per card instance) */}
          {isExpanded && (
            <div className="card-expanded-box">
              <h4>Category: {details.category || 'Software Project'}</h4>
              <p><strong>Role:</strong> {details.role || 'Developer'}</p>
              {details.keyFeatures && details.keyFeatures.length > 0 && (
                <div>
                  <strong>Key Highlights:</strong>
                  <ul>
                    {details.keyFeatures.slice(0, 2).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
