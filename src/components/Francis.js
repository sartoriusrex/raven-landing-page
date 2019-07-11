import React from 'react';

import "./Unselected.css";
import "./Selected.css";
import { ReactComponent as RedStarUnselect } from '../images/star-unselected-red.svg';
import { ReactComponent as EmptyStarUnselect } from '../images/start-unselected-empty.svg';
import FrancisBioPic from "../images/francis-img.jpg";

const Francis = () => {
  return(
    <div className="bio-container bio-last">
      <div className="bio-image-container">
        <div className="bio-image-filter">
        </div>
        <img
          src={ FrancisBioPic }
          alt="gray bio pic" 
          className="bio-image"
        />
      </div>
      <div className="bio-header">
        <div className="bio-title-container">
          <p className="bio-name">Julian Francis</p>
          <p className="bio-title">Quality Control Chemist</p>
        </div>
        <div className="bio-rating">
          <RedStarUnselect className="bio-star"/>
          <RedStarUnselect className="bio-star"/>
          <EmptyStarUnselect className="bio-star"/>
          <EmptyStarUnselect className="bio-star"/>
          <EmptyStarUnselect />
        </div>
      </div>
      <div className="bio-text-container">
        <p className="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum erat, sit amet condimentum enim. Ut non tempor dolor. Curabitur a lacinia magna.  
        </p>
      </div>
    </div>
  )
}

export default Francis;