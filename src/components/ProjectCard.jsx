import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({
  id,
  title,
  shortDescription,
  description,
  techStack = [],
  bgClass = '',
  bgImage = '',
  image = '',
  githubLink,
  link,
  details = {}
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayDescription = description || shortDescription;
  const displayImage = image || bgImage;
  const displayLink = githubLink || link;

  const cardStyle = displayImage ? { backgroundImage: `url(${displayImage})`, backgroundSize: 'cover' } : {};

  return (
    <article className={`project-card ${bgClass}`} style={cardStyle}>
      <div className="project-card-overlay"></div>
      <div className="project-card-content">
        <div>
          <h3>{title}</h3>
          <p>{displayDescription}</p>

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

            {displayLink && (
              <a
                href={displayLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub ↗
              </a>
            )}
          </div>

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
