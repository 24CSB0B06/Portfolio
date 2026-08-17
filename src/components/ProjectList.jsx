import React from 'react';
import ProjectCard from './ProjectCard';

/**
 * ProjectList - Child component demonstrating Prop Drilling (Level 2).
 * Receives array of project objects from Projects page component and forwards individual fields down to ProjectCard.
 */
export default function ProjectList({ projectsList }) {
  if (!projectsList || projectsList.length === 0) {
    return <p className="contact-lead">No projects available at the moment.</p>;
  }

  return (
    <div className="projects-grid">
      {projectsList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          shortDescription={project.shortDescription}
          techStack={project.techStack}
          bgClass={project.bgClass}
          bgImage={project.bgImage}
          githubLink={project.githubLink}
          details={project.details}
        />
      ))}
    </div>
  );
}
