import React from 'react';
import { RiVirusFill, RiAlertFill, RiCheckboxCircleFill, RiArrowUpLine } from "react-icons/ri";

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
  suspects?: number,
  refuses?: number,
  datetime?: string
}

const bandeira = require.context( '../assets/images/bandeiras', true, /\.(png|jpe?g|svg)$/);

const paths = bandeira.keys ()

const images = paths.map( path => bandeira ( path ) )

const bandeirasPNG = {
  AC: images[0],
  AL: images[1],
  AM: images[2],
  AP: images[3],
  BA: images[4],
  CE: images[5],
  DF: images[6],
  ES: images[7],
  GO: images[8],
  MA: images[9],
  MG: images[10],
  MS: images[11],
  MT: images[12],
  PA: images[13],
  PB: images[14],
  PE: images[15],
  PI: images[16],
  PR: images[17],
  RJ: images[18],
  RN: images[19],
  RO: images[20],
  RR: images[21],
  RS: images[22],
  SC: images[23],
  SE: images[24],
  SP: images[25],
  TO: images[26],
  BR: images[27],
}

const Stats: React.FC<StatsProps> = ( { state, cases, deaths, suspects, refuses, uf}) => {

  let letality = 0
  
  if (deaths && cases) {
    letality = (deaths / cases * 100)
  }

  let flagPath = ''

  Object.entries(bandeirasPNG).map(key => {
  if (key[0] === uf) {
    flagPath = key[1]
  }
  return 0;
  })
  
  return (
    <div className="stats-wrapper">
      <div id="stats-box">
        <div className="stats-content">
          <div className="stats-header">
            <div className="local">
              <img className="local-flag"  src={flagPath} alt={`Bandeira do ${state}`}/>
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
              <div className="icon alert-icon">
                <RiAlertFill />
              </div>
              Casos suspeitos: {formatNumber(suspects)}
            </div>

            <div className="info">
              <div className="icon refuse-icon">
                <RiCheckboxCircleFill />
              </div>
              Casos descartados: {formatNumber(refuses)}
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