import React from 'react';

import "./Hero.css";
import BrandTop from '../BrandTop';
import HeroImage from '../HeroImage';

const HeroSection = () => {
  return(
    <div className="hero-section">
      <BrandTop />
      <h1 className="title">Online Business</h1>
      <HeroImage />
    </div>
  )
}

export default HeroSection;