import React from 'react';
import Contact from '../About/Contact';
// var imageName = require('../../constants/circle-cropped.png');

import './sidenav.css';

const SideNav = ({handleSection}) => {
    return (
        <div className="sidenav">
           <img className="avatar" 
            src={ require('../../constants/circle-cropped.png') } 
            alt="avatar"
            />
            <h2 className="main-name">Naveen Prabhu</h2>
            <p className="subtitle">Self Learned Developer</p>
            <Contact/>
            <div className="sections-list">
                <p onClick={handleSection.bind(this,"about")} className="section-list-element">About Me</p>
                <p onClick={handleSection.bind(this,"skills")} className="section-list-element">Skills</p>
                <p onClick={handleSection.bind(this,"projects")} className="section-list-element">Projects</p>
            </div>
        </div>
    );
};
export default SideNav;