import React, { useState } from 'react';

import "./Navbar.css";
import { ReactComponent as MenuButton } from '../images/menu-button.svg';
import { ReactComponent as UKFlagTop } from '../images/united-kingdom.svg';
import { ReactComponent as FlagDropdownNav } from '../images/flag-dropdown-top.svg';

const Navbar = () => {
  const [ status, setState ] = useState("hidden");

  const toggleStatus = () => {
    status === "hidden" ? 
    setState("visible") :
    setState("hidden")
  }

  return(
    <nav className="nav">
      <MenuButton 
        className="menu-button"
        onClick={ toggleStatus }
      />
      <ul className="list-group">
        <li className="list-item" >ABOUT US</li>
        <li className="list-item" >RANGE</li>
        <li className="list-item" >PRODUCTS</li>
        <li className="list-item" >OPINIONS</li>
        <li className="list-item" >CONTACT</li>
        <UKFlagTop className="uk-flag-top" />
        <FlagDropdownNav className="flagdrop-nav"/>
      </ul>

      {
        status === "visible" && 
        <ul className="list-group-menu">
          <li className="list-item" >ABOUT US</li>
          <li className="list-item" >RANGE</li>
          <li className="list-item" >PRODUCTS</li>
          <li className="list-item" >OPINIONS</li>
          <li className="list-item" >CONTACT</li>
          <li className="list-item" >
            <UKFlagTop className="uk-flag-top" />
            <FlagDropdownNav className="flagdrop-nav"/>
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navbar;