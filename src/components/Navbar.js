import React from 'react';

import "./Navbar.css";

const Navbar = () => {
  return(
    <nav className="nav">
      <ul className="list-group">
        <li className="list-item" >ABOUT US</li>
        <li className="list-item" >RANGE</li>
        <li className="list-item" >PRODUCTS</li>
        <li className="list-item" >OPINIONS</li>
        <li className="list-item" >CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar;