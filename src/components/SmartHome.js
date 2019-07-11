import React from 'react';

import MoreAboutIt from './MoreAboutIt';
import "./SmartHome.css";
import SmartHomeImg from '../images/kvistholt-photography-191153-unsplash.jpg';

const SmartHome = () => {
  return(
    <div className="smart-container">
      <div className="smart-image-container">
        <div className="smart-background-div-large"></div>
        <div className="smart-background-div-med"></div>
        <img
          src={ SmartHomeImg }
          alt="smarthome controller"
          className="smart-img"
        />
        <div className="smart-overlay-one"></div>
        <div className="smart-text-container">
          <p className="smart-text">SmartHomeYOU</p>
        </div>
      </div>
      <MoreAboutIt />
    </div>
  )
}

export default SmartHome;