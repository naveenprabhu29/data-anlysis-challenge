import React from 'react';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';

import './section-container.css';

export const SectionContainer = (
    {
        selectedHead,
    selectedQuote,
    selectedSec,
    about,
	skills,
	projects
    }
) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHead} </h1>
                <p className="main-quote">{selectedQuote}
                </p>

            </div>
            <div className="section-component">
              
              {  
                    {
                        about:<About about={about}/>,
                        skills:<Skills skills={skills} />,
                        projects:<Projects projects={projects}/>
                    }[selectedSec]
                } 
            </div>
        </div>
    )
}