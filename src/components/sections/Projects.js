import React from 'react';

import "./Projects.css";
import ChainSpot from '../ChainSpot';
import SmartHome from '../SmartHome';
import Drone from '../Drone';

const ProjectSection = () => {
  return(
    <section className="project-section-container">
      <h2 className="project-title">Projects</h2>
      <div className="project-item-container">
        <ChainSpot />
        <SmartHome />
        <Drone />
      </div>
    </section>
  )
}

export default ProjectSection;