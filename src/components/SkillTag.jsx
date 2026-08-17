import React from 'react';

export default function SkillTag({ name, tagClass = '' }) {
  return <li className={`skill-tag ${tagClass}`}>{name}</li>;
}
