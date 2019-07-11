import React from 'react';

import "./Opinions.css";
import Gray from '../Gray';
import Rowe from '../Rowe';

const OpinionSection = () => {
  return(
    <section className="opinions-section-container">
      <h2 className="opinion-title">Opinions</h2>
      <div className="opinion-item-container">
        <div className="opinion-item-inner-container">
          <Gray />
          <Rowe />
        </div>
      </div>
    </section>
  )
}

export default OpinionSection;