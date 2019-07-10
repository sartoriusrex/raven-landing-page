import React from 'react';

import LogoTop from '../images/rlogo.jpg';
import { ReactComponent as LogoText } from '../images/raven.svg'
import "./BrandTop.css";

const BrandTop = () => {
  return(
    <div className="brand-container">
      <img 
        src={ LogoTop }
        alt="logo top"
        className="brand-top"
      />
      <LogoText className="logo-text" />
    </div>
  )
}

export default BrandTop;