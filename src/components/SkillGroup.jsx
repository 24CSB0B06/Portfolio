import React from 'react';
import SkillTag from './SkillTag';

export default function SkillGroup({ categoryTitle, items = [] }) {
  return (
    <div className="skills-group">
      <span className="skills-category">{categoryTitle}</span>
      <ul className="skills-list">
        {items.map((item, index) => (
          <SkillTag key={index} name={item.name} tagClass={item.tagClass} />
        ))}
      </ul>
    </div>
  );
}
