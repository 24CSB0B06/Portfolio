import React from 'react';
import ProjectList from '../components/ProjectList';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section-container">
      <h2 className="section-title">My Projects</h2>
      <p className="contact-lead">
        Explore a curated selection of full-stack systems, smart monitoring solutions, and interactive web tools.
      </p>

      {/* Demonstrates Prop Drilling (Level 1): Projects page passes projects data array down to ProjectList */}
      <ProjectList projectsList={projects} />
    </section>
  );
}
