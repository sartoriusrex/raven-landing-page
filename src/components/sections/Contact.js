import React from 'react';

import "./Contact.css";
import ContactItem from '../ContactItem';
import ContactForm from '../ContactForm';


const ContactSection = () => {
  return(
    <div className="contact-section-container">
      <div className="red-background"></div>
      <div className="purple-background"></div>
      <h2 className="contact-title">Contact</h2>
      <ul className="contact-items">
        <ContactItem
          containerSize="address-width"
          header="ADDRESS" 
          infoOne="750 N. SAN VICENTE BLVD."
          infoTwo="STE 800W"
          infoThree="WEST HOLLYWOOD, CA 90069"
          marginAddress="margin-address"
        />
        <ContactItem
          containerSize="phone-width"
          header="PHONE" 
          infoOne="1-877-702-2294"
          marginPhone="margin-phone"
        />
        <ContactItem 
          containerSize="social-width"
          header="Social media" 
          infoOne="Skype: raven-it.io"
          marginSocial="margin-social"
          sizeSocial="social-size"
        />
      </ul>
      <ContactForm />
      <div className="map"></div>
      <div className="main-marker"></div>
      <div className="secondary-marker"></div>
      <div className="bottom-purple"></div>
      <div className="bottom-pink"></div>
      <div className="bottom-white"></div>
    </div>
  )
}

export default ContactSection;