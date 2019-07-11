import React, { useState } from 'react';

import "./Opinions.css";
import Gray from '../Gray';
import Rowe from '../Rowe';
import Francis from '../Francis';

const OpinionSection = () => {
  const [ status, setStatus ] = useState("rowe");

  return(
    <section className="opinions-section-container">
      <h2 className="opinion-title">Opinions</h2>
      <div className="opinion-item-container">
        <div className="opinion-item-inner-container">
          <Gray status={ status } updateStatus={ setStatus } />
          <Rowe status={ status } updateStatus={ setStatus } />
          <Francis status={ status } updateStatus={ setStatus } />
        </div>
      </div>
    </section>
  )
}

export default OpinionSection;