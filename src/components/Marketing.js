import React from 'react';

import "./Marketing.css";
import { ReactComponent as MarketingIcon } from "../images/shopping.svg";
import { ReactComponent as MarketingShape } from "../images/path-3.svg";

const Marketing = () => {
  return(
    <div className="marketing-container">

      <div className="pink-rectangle-marketing"></div>

      <MarketingIcon className="marketing-icon"/>
      <MarketingShape className="marketing-shape-icon"/>

      <h6 className="marketing-title">Online Marketing</h6>

      <div className="marketing-text-container">
        <p className="marketing-text">
          Email Marketing
        </p>
        <p className="marketing-text">
          Social Media Marketing
        </p>
        <p className="marketing-text">
          Search Engine Optimization (SEO)
        </p>
      </div>
    </div>
  )
}

export default Marketing;