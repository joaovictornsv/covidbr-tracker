import React from 'react';
import { RiVirusFill, RiArrowUpLine } from "react-icons/ri";

import { FaCross } from 'react-icons/fa';


import 'remixicon/fonts/remixicon.css'

import { formatNumber } from '../utils/formatNumber';
import '../styles/components/Stats.css';


export interface StatsProps {
  uid?: number,
  uf?: string,
  state?: string,
  cases?: number,
  deaths?: number,
  datetime?: string
}

const Stats: React.FC<StatsProps> = ( { state, cases, deaths, uf}) => {

  let letality = 0
  
  if (deaths && cases) {
    letality = (deaths / cases * 100)
  }

  return (
    <div className="stats-wrapper">
      <div id="stats-box">
        <div className="stats-content">
          <div className="stats-header">
            <div className="local">
              <img className="local-flag"  src={`https://raw.githubusercontent.com/bgeneto/bandeiras-br/master/imagens/${uf}.png`} alt={`Bandeira do ${state}`}/>
              <h1>{state}</h1>
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
              Total de casos: {formatNumber(cases)}
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

export default Stats;