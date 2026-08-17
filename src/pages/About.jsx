import React from 'react';
import Skills from '../components/Skills';

export default function About() {
  const skillCategories = [
    {
      categoryTitle: "Core & Languages",
      items: [
        { name: "DSA", tagClass: "tag-dsa" },
        { name: "OOPS", tagClass: "tag-oops" },
        { name: "C++", tagClass: "tag-cpp" }
      ]
    },
    {
      categoryTitle: "Web Development",
      items: [
        { name: "HTML5", tagClass: "tag-html" },
        { name: "CSS3", tagClass: "tag-css" },
        { name: "JavaScript", tagClass: "tag-js" },
        { name: "React", tagClass: "tag-react" },
        { name: "Node.js", tagClass: "tag-node" }
      ]
    },
    {
      categoryTitle: "Databases & Tools",
      items: [
        { name: "PostgreSQL", tagClass: "tag-postgres" },
        { name: "SQL", tagClass: "tag-sql" },
        { name: "Git & GitHub", tagClass: "tag-git" }
      ]
    }
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <p className="about-bio">
          I am a Computer Science Engineering student at the National Institute of Technology Warangal.
          I am deeply interested in building scalable web applications, mastering Data Structures & Algorithms,
          and designing robust Database Management Systems.
        </p>

        <div className="about-grid">
          <div className="about-card education-card">
            <h3>Education</h3>
            <p className="education-degree">B.Tech in Computer Science & Engineering</p>
            <p className="education-institution">National Institute of Technology Warangal</p>
            <div className="education-achievement">
              <span className="achievement-bullet">•</span>
              <span className="achievement-text">
                <strong>JEE Main 2024:</strong> Secured <strong>99.82 percentile</strong> (AIR 2830) among approximately 1,400,000 candidates.
              </span>
            </div>
          </div>

          {/* Prop Drilling: About -> Skills -> SkillGroup -> SkillTag */}
          <Skills skillCategories={skillCategories} />
        </div>
      </div>
    </section>
  );
}
