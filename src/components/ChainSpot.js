import React from 'react';

import MoreAboutIt from './MoreAboutIt';
import "./ChainSpot.css";
import chainspotImg from '../images/backend.jpg';

const ChainSpot = () => {
  return(
    <div className="chainspot-container">
      <div className="chainspot-image-container">
        <div className="chainspot-background-div-large"></div>
        <div className="chainspot-background-div-med"></div>
        <img
          src={ chainspotImg }
          alt="chainspot backend"
          className="chainspot-img"
        />
        <div className="chainspot-overlay-three"></div>
        <div className="chainspot-overlay-two"></div>
        <div className="chainspot-overlay-one"></div>
        <div className="chainspot-text-container">
          <p className="chainspot-text">ChainSpot</p>
        </div>
      </div>
      <MoreAboutIt />
    </div>
  )
}

export default ChainSpot;