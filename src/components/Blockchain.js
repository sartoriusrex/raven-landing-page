import React from 'react';

import "./Blockchain.css";
import { ReactComponent as BlockchainIcon } from "../images/performance.svg";
import { ReactComponent as OvalSvg } from "../images/blockchain_oval.svg";

const Blockchain = () => {
  return(
    <div className="blockchain-container">

      <div className="pink-rectangle-blockchain"></div>

      <BlockchainIcon className="blockchain-icon"/>
      <OvalSvg className="blockchain-oval-top"/>
      <OvalSvg className="blockchain-oval-bottom"/>

      <h6 className="blockchain-title">Blockchain</h6>

      <div className="blockchain-text-container">
        <p className="blockchain-text">
          Develop of Smart Contract
        </p>
        <p className="blockchain-text">
          Integrate payment system 
        </p>
        <p className="marketing-text">
          Install blockchain nodes
        </p>
      </div>
    </div>
  )
}

export default Blockchain;