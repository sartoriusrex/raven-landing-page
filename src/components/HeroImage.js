import React from 'react';

import "./HeroImage.css";
import Navbar from './Navbar';
import { ReactComponent as UKFlagTop } from '../images/united-kingdom.svg';
import { ReactComponent as FlagDropdownNav } from '../images/flag-dropdown-top.svg';

const HeroImage = () => {
  return(
    <div className="background">
      <Navbar />
      <UKFlagTop className="uk-flag-top" />
      <FlagDropdownNav className="flagdrop-nav"/>
    </div>
  )
}

export default HeroImage;