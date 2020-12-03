import React from 'react'



import './project-card.css';

export const ProjectCard = ({proj}) => {
    if(proj.status==="1"){
    return (
<div> <div key={proj} className="project-card">
          
         <h4 style={{color:"steelblue",fontSize:"25px"}}>{proj.name}</h4>
       
  
         {proj.tech}<br/><br/>
         {proj.desc}
         <h5 ><a style={{color:"#16697a",textDecoration:"none"}} href={proj.web}>View Project </a></h5>
         <h5 ><a style={{color:"#16697a",textDecoration:"none"}} href={proj.source}>View Project Code </a></h5>

        
        </div>
        <br/>
         <hr style={{borderStyle:"none",borderTopStyle:"dotted",borderWidth:"5px",borderColor:"grey",width:"40%"}}/>
        <br/></div>
       
    )
    }
    else{
        return(
            <div style={{display:"block"}}> <div key={proj} className="project-card">
         <h4 style={{color:"steelblue",fontSize:"25px"}}>{proj.name}</h4>
            <h4 style={{color:'#0a043c'}}>Project On Going</h4>
        </div>
       </div>
           
        )
    }
}