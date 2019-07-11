import React from 'react';

import "./Unselected.css";
import "./Selected.css";
import { ReactComponent as RedStarUnselect } from '../images/star-unselected-red.svg';
import { ReactComponent as EmptyStarUnselect } from '../images/start-unselected-empty.svg';
import { ReactComponent as RedStarSelect } from '../images/start-selected-red.svg';
import { ReactComponent as EmptyStarSelect } from '../images/start-selected-empty.svg';
import RoweBioPic from "../images/row-img.jpg";

const Rowe = () => {
  return(
    <div className="bio-container-selected">
      <div className="bio-image-container-selected">
        {/* <div className="bio-image-filter-selected">
        </div> */}
        <img
          src={ RoweBioPic }
          alt="gray bio pic" 
          className="bio-image-selected"
        />
      </div>
      <div className="bio-header-selected">
        <div className="bio-title-container">
          <p className="bio-name-selected">RobertoRowe</p>
          <p className="bio-title-selected">Licensed Embalmer</p>
        </div>
        <div className="bio-rating-selected">
          {/* <RedStarUnselect className="bio-star"/>
          <RedStarUnselect className="bio-star"/>
          <RedStarUnselect className="bio-star"/>
          <RedStarUnselect className="bio-star"/>
          <EmptyStarUnselect /> */}
          <RedStarSelect />
          <RedStarSelect />
          <RedStarSelect />
          <RedStarSelect />
          <EmptyStarSelect />
        </div>
      </div>
      <div className="bio-text-container-selected">
        <p className="bio-text-selected">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum erat, sit amet condimentum enim. Ut non tempor dolor. Curabitur a lacinia magna. 
        </p>
      </div>
    </div>
  )
}

export default Rowe;