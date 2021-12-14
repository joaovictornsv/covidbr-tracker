import React from 'react';
import { RiVirusFill, RiArrowUpLine } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css';
import { FaCross } from 'react-icons/fa';

import BrazilFlag from '../assets/images/bandeiras/bandeira_brasil.png';

import { formatNumber } from '../utils/formatNumber';
import '../styles/components/StatsBrazil.css';

export interface StatsBrazilProps {
    country?: string,
    confirmed?: number,
    deaths?: number,
    updated_at?: string
}

const StatsBrazil: React.FC<StatsBrazilProps> = ( { confirmed, deaths }) => {
  let letality = 0;

  if (deaths && confirmed) {
    letality = (deaths / confirmed * 100)
  }


  return (
    <div className="stats-wrapper">
      <div id="stats-box">
        <div className="stats-content">
          <div className="stats-header">
            <div className="local">
              <img className="local-flag"  src={BrazilFlag} alt="Bandeira do Brasil"/>
              <h1>Brasil</h1>
            </div>
            <div className="back-icon">   
              <a className="back" href="#main">
                <RiArrowUpLine />
              </a>
            </div>
          </div>

          <div className="stats-stats">
            <div className="info">
              <div className="icon virus-icon">
                <RiVirusFill />
              </div>
              Total de casos: {formatNumber(confirmed)}
            </div>

            <div className="info">
              <div className="icon death-icon">
                <FaCross />
              </div>
              Mortes: {formatNumber(deaths)}
            </div>
          </div>

          <div className="second-stats">
            <div className="letality">
              <strong>Letalidade:</strong><br/>
                {letality.toFixed(2)} %
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsBrazil;