import React from 'react';

import MoreAboutIt from './MoreAboutIt';
import "./Drone.css";
import DroneImg from '../images/drone.jpg';

const Drone = () => {
  return(
    <div className="drone-container">
      <div className="drone-image-container">
        <div className="drone-background-div-large"></div>
        <div className="drone-background-div-med"></div>
        <img
          src={ DroneImg }
          alt="drone flying"
          className="drone-img"
        />
        <div className="drone-overlay-one"></div>
        <div className="drone-text-container">
          <p className="drone-text">ChainSpot</p>
        </div>
      </div>
      <MoreAboutIt />
    </div>
  )
}

export default Drone;