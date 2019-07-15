import React from 'react';

import "./Unselected.css";
import "./Selected.css";
import { ReactComponent as RedStarUnselect } from '../images/star-unselected-red.svg';
import { ReactComponent as EmptyStarUnselect } from '../images/start-unselected-empty.svg';
import { ReactComponent as RedStarSelect } from '../images/start-selected-red.svg';
import { ReactComponent as EmptyStarSelect } from '../images/start-selected-empty.svg';
import RoweBioPic from "../images/row-img.jpg";

const Rowe = ({ status, updateStatus }) => {
  let style;

  if( status === "rowe" ){
    style = "selected"
  } else {
    style = "unselected"
  }

  return(
    <div 
      className={`bio-container-${ style }`}
      onClick={ () => updateStatus("rowe") }
    >
      <div className={`bio-image-container-${ style }`}>
        { 
          style === "unselected" &&
          <div className={`bio-image-filter-${ style }`}></div>
        }
        <img
          src={ RoweBioPic }
          alt="gray bio pic" 
          className={`bio-image-${ style }`}
        />
      </div>
      <div className={`bio-header-${ style }`}>
        <div className={`bio-title-container-${ style }`}>
          <p className={`bio-name-${ style }`}>RobertoRowe</p>
          <p className={`bio-title-${ style }`}>Licened Embalmer</p>
        </div>
        <div className={`bio-rating-${ style }`}>
          { 
            status === "rowe" ?
            <>
              <RedStarSelect className="bio-star-selected" />
              <RedStarSelect className="bio-star-selected" />
              <RedStarSelect className="bio-star-selected" />
              <RedStarSelect className="bio-star-selected" />
              <EmptyStarSelect />
            </>
            :
            <>
              <RedStarUnselect className="bio-star-unselected"/>
              <RedStarUnselect className="bio-star-unselected"/>
              <RedStarUnselect className="bio-star-unselected"/>
              <RedStarUnselect className="bio-star-unselected"/>
              <EmptyStarUnselect />
            </>
          }
        </div>
      </div>
      <div className={`bio-text-container-${ style }`}>
        <p className={`bio-text-${ style }`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum erat, sit amet condimentum enim. Ut non tempor dolor. Curabitur a lacinia magna. 
        </p>
      </div>
    </div>
  )
}

export default Rowe;