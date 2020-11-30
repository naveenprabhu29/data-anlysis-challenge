import React from 'react';
import { SkillCard } from '../SkillCard/SkillCard';

import './skills.css';

export const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h2 style={{color:"#16a596"}}>Area Of Interest</h2> 
            <div className="industry-skill-container">
                {
                      skills.areaOfInterest.map(skill => <SkillCard skill={skill} />)
                }
            </div>
           
            <h2 style={{color:"#16a596"}}>Tech Skills</h2>
            <div className="industry-skill-container">
                {
                      skills. techSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            <h2 style={{color:"#16a596"}}>InterPersonal skills</h2>
            <div className="industry-skill-container">
                {
                     skills.interpersonalSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            
        </div>
    )
}