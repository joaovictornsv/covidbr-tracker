import React from 'react';
import { RiVirusFill, RiAlertFill, RiCheckboxCircleFill, RiArrowUpLine } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css';
import { FaCross } from 'react-icons/fa';

import BrazilFlag from '../assets/images/bandeiras/bandeira_brasil.png';

import { formatNumber } from '../utils/formatNumber';
import '../styles/components/StatsBrazil.css';

export interface StatsBrazilProps {
    country?: string,
    cases?: number,
    confirmed?: number,
    deaths?: number,
    recovered?: number,
    updated_at?: string
}

const StatsBrazil: React.FC<StatsBrazilProps> = ( { cases, confirmed, deaths, recovered }) => {
  let letality = 0;
  let recovery = 0

  if (deaths && confirmed) {
    letality = (deaths / confirmed * 100)
  }

  if (recovered && confirmed) {
    recovery = (recovered / confirmed * 100)
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
              <div className="icon alert-icon">
                <RiAlertFill />
              </div>
              Casos ativos: {formatNumber(cases)}
            </div>

            <div className="info">
              <div className="icon refuse-icon">
                <RiCheckboxCircleFill />
              </div>
              Casos recuperados: {formatNumber(recovered)}
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

            </div><div className="recovery">
              <strong>Recuperação:</strong><br/>
                {recovery.toFixed(2)} %
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsBrazil;