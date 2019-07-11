import React from 'react';

import "./Web.css";
import { ReactComponent as WebIcon } from "../images/web.svg";
import { ReactComponent as SmallShape } from "../images/path-2.svg";

const Web = () => {
  return(
    <div className="web-container">
      <div className="pink-rectangle"></div>
      <WebIcon className="web-icon"/>
      <SmallShape className="web-small-shape" />
      <h6 className="web-title">Web-development</h6>
      <div className="web-text-container">
        <p className="web-text">
          Website Develop 
        </p>
        <p className="web-text">
          eCommerce Develop
        </p>
        <p className="web-text">
          Develop of online services
        </p>
      </div>
    </div>
  )
}

export default Web;