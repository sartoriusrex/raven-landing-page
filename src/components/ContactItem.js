import React from 'react';

import "./Contactitem.css";

const ContactItem = ({ containerSize, marginAddress, marginPhone, marginSocial, sizeSocial, header, infoOne, infoTwo, infoThree }) => {
  return(
    <li className={`contact-list-item ${ marginPhone } ${ marginSocial } ${ marginAddress } ${ containerSize }`}>
      <div className="list-marker"></div>
      <div className="contact-list-info">
        <p className={`contact-info-header ${ sizeSocial }`}>{ header }</p>
        <div className="contact-info-container">
          <p className="contact-info">{ infoOne }</p>
          <p className="contact-info">{ infoTwo }</p>
          <p className="contact-info">{ infoThree }</p>
        </div>
      </div>
    </li>
  )
}

export default ContactItem;