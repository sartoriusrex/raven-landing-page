import React from 'react';

import "./HeroImage.css";
import Navbar from './Navbar';

const HeroImage = () => {
  return(
    <>
    <div className="background"></div>
    <div className="nav-container">
      <Navbar />
    </div>
    </>
  )
}

export default HeroImage;