import React from 'react';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import SideNav from '../SideNav/SideNav';
import './portfolio.css';


export const Portfolio = ({
    selectedHead,
    selectedQuote,
    selectedSec,
    handleSection,
    about,
	skills,
	projects
}) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                handleSection={handleSection}/>
            </div>
            <div className="main-section-container">
                <SectionContainer
                selectedHead={selectedHead}
                selectedQuote={selectedQuote}
                selectedSec={selectedSec}
                about={about}
				skills={skills}
				projects={projects}
                
                />
            </div>
        </div>
    );
};