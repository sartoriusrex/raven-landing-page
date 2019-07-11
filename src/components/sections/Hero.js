import React from 'react';

import "./Hero.css";
import BrandTop from '../BrandTop';
import HeroImage from '../HeroImage';
import HeroCall from '../HeroCall';

const HeroSection = () => {
  return(
    <section className="hero-section">
      <BrandTop />
      <h1 className="title">Online Business</h1>
      <HeroCall />
      <HeroImage />
    </section>
  )
}

export default HeroSection;