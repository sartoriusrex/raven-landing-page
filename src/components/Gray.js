import React from 'react';

import "./Unselected.css";
import "./Selected.css";
import { ReactComponent as RedStarUnselect } from '../images/star-unselected-red.svg';
import { ReactComponent as EmptyStarUnselect } from '../images/start-unselected-empty.svg';
import { ReactComponent as RedStarSelect } from '../images/start-selected-red.svg';
import { ReactComponent as EmptyStarSelect } from '../images/start-selected-empty.svg';
import GrayBioPic from "../images/gray-img.jpg";

const Gray = ({ status, updateStatus }) => {
  let style;

  if( status === "gray" ){
    style = "selected"
  } else {
    style = "unselected"
  }

  return(
    <div 
      className={`bio-container-${ style }`}
      onClick={ () => updateStatus("gray") }
    >
      <div className={`bio-image-container-${ style }`}>
        { 
          style === "unselected" &&
          <div className={`bio-image-filter-${ style }`}></div>
        }
        <img
          src={ GrayBioPic }
          alt="gray bio pic" 
          className={`bio-image-${ style }`}
        />
      </div>
      <div className={`bio-header-${ style }`}>
        <div className={`bio-title-container-${ style }`}>
          <p className={`bio-name-${ style }`}>Nick Gray</p>
          <p className={`bio-title-${ style }`}>Chef “Arigato”</p>
        </div>
        <div className={`bio-ratin-${ style }"`}>
          { 
            status === "gray" ?
            <>
              <RedStarSelect className="bio-star-selected" />
              <RedStarSelect className="bio-star-selected" />
              <EmptyStarSelect className="bio-star-selected" />
              <EmptyStarSelect className="bio-star-selected" />
              <EmptyStarSelect />
            </>
            :
            <>
              <RedStarUnselect className="bio-star-unselected"/>
              <RedStarUnselect className="bio-star-unselected"/>
              <EmptyStarUnselect className="bio-star-unselected"/>
              <EmptyStarUnselect className="bio-star-unselected"/>
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

export default Gray;