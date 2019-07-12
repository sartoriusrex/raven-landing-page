import React from 'react';

import "./HeroImage.css";
import Navbar from './Navbar';
import { ReactComponent as UKFlagTop } from '../images/united-kingdom.svg';

const HeroImage = () => {
  return(
    <div className="background">
      <Navbar />
      <UKFlagTop className="uk-flag-top" />
    </div>
  )
}

export default HeroImage;