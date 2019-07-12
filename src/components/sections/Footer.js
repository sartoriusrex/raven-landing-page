import React from 'react';

import "./Footer.css";
import FooterLogo from '../../images/logo.jpg';
import { ReactComponent as FooterFlag } from '../../images/united-kingdom-footer.svg';
import { ReactComponent as FlagDropdownFooter } from '../../images/flag-dropdown-footer.svg';

const FooterSection = () => {
  return(
    <div className="footer-section-container">
      <div className="footer-items-container">
        <div className="footer-main-container">
          <div className="footer-main-options-container">
            <ul className="footer-main-options-one">
              <li className="footer-main-li">About us</li>
              <li className="footer-main-li">Range</li>
              <li className="footer-main-li">Projects</li>
              <li className="footer-main-li">Opinions</li>
              <li className="footer-main-li">Contact</li>
            </ul>
            <ul className="footer-main-options-two">
              <li className="footer-main-li">How it works?</li>
              <li className="footer-main-li">Help</li>
              <li className="footer-main-li">Privacy Policy</li>
              <li className="footer-main-li">Terms and Conditions</li>
            </ul>
          </div>
          <img className="footer-logo" src={ FooterLogo } alt="footer logo" />
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <FooterFlag />
            <p className="footer-bottom-left-text">
              United Kingdom
            </p>
            <FlagDropdownFooter className="flagdrop-footer"/>
          </div>
          <div className="footer-bottom-right">
            <p className="footer-bottom-right-text">2019 Business. All Rights Reserverd.</p>
            <p className="footer-bottom-right-text">Privacy Policy</p>
            <p className="footer-bottom-right-text">Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection;