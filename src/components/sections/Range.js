import React from 'react';

import "./Range.css";
import Web from "../Web";
import Marketing from "../Marketing";
import Blockchain from "../Blockchain";
import Database from "../Database";

const RangeSection = () => {
  return(
    <section className="range-section-container">
      <h2 className="range-title">Range</h2>
      <div className="range-item-container">
        <Web />
        <Marketing />
        <Blockchain />
        <Database />
      </div>
    </section>
  )
}

export default RangeSection;