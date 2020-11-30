import React from 'react';

import './skill-card.css';

export const SkillCard = ({skill}) => {
    return (
        <div className="skill-card">
            <h4 key={skill}>{skill}</h4>
        </div>
    )
}