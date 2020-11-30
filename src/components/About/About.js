import React from 'react';
// import { about } from '../../constants/About';
import '../ProjectCard/project-card.css'

import './about.css';
// import Contact from './Contact';

export const About = ({about}) => {
    return (
        <div className="about-container">
            {about.bio}
            
        <div style={{ padding:"10px",margin:"60px 20% 60px 20%", display: "flex",
                flexWrap: "wrap",
                alignContent: "center" , backgroundColor:"ButtonFace"}}> <div className="project-card" style={{
                    padding:"3px",
                    textAlign:"center",
                    alignContent:"center",
                    
            }}>
                <p style={{fontWeight:"bolder" , textDecoration:"underline",padding:"5px"}}>Academics</p>
                <p style={{fontWeight:"bold" , textDecoration:"none"}}>Schoolings</p>
                <p style={{fontWeight:"initial" , textDecoration:"none"}}>RGM/RKR-HR sec School</p>
                <p style={{fontWeight:"Bold" , textDecoration:"none"}}>UG</p>
                <p style={{fontWeight:"initial" , textDecoration:"none"}}>Bannari Amman Institute Of Technology</p>



            </div></div>
                <h3 style={{color:"steelblue"}}>In Case of any queries contact me:</h3>
                <h4 className="contact-element" style={{color:"steelblue"}}><i class="fa fa-envelope" aria-hidden="true"></i> <a style={{color:"steelblue"}} href="mailto:someone@example.com">naveenprabhuje@gmail.com</a> </h4>
                <h4 className="contact-element"><i class="fa fa-phone" aria-hidden="true"></i><a style={{color:"steelblue"}} href="tel:+918012218015">+91 801221 8015</a></h4>
                <div>
                    
                </div>
           
            
        </div>
    )
}