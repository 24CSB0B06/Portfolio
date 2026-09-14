import React from 'react';
import ProjectCard from './ProjectCard';

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
          description={project.description}
          techStack={project.techStack}
          bgClass={project.bgClass}
          bgImage={project.bgImage}
          image={project.image}
          githubLink={project.githubLink}
          link={project.link}
          details={project.details}
        />
      ))}
    </div>
  );
}
