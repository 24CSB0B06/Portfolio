import React from 'react';
import SkillGroup from './SkillGroup';

export default function Skills({ skillCategories = [] }) {
  return (
    <div className="about-card">
      <h3>Technical Skills</h3>
      {skillCategories.map((group, idx) => (
        <SkillGroup key={idx} categoryTitle={group.categoryTitle} items={group.items} />
      ))}
    </div>
  );
}
