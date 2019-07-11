import React from 'react';

import "./Database.css";
import { ReactComponent as DatabaseIcon } from "../images/server.svg";
import { ReactComponent as RectangleOne } from "../images/rectangle-copy-3.svg";
import { ReactComponent as RectangleTwo } from "../images/rectangle-copy-2.svg";
import { ReactComponent as RectangleThree } from "../images/rectangle-2.svg";

const Database = () => {
  return(
    <div className="database-container">

      <div className="pink-rectangle1-database"></div>

     <DatabaseIcon className="database-icon"/>
     <RectangleOne className="pink-rectangle1-database"/>
     <RectangleTwo className="pink-rectangle2-database"/>
     <RectangleThree className="pink-rectangle3-database"/>

      <h6 className="database-title">Provide Database</h6>

      <div className="database-text-container">
        <p className="database-text">
          Up of users database
        </p>
        <p className="database-text">
          Google scrapping 
        </p>
        <p className="database-text">
          Yahoo scrapping
        </p>
      </div>
    </div>
  )
}

export default Database;