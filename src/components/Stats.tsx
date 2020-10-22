import React from 'react';
import { RiVirusFill, RiAlertFill, RiCheckboxCircleFill, RiSkullFill } from "react-icons/ri";
import 'remixicon/fonts/remixicon.css'

import '../styles/components/Stats.css'

export interface StatsProps {
    uid?: number,
    uf?: string
    state?: string,
    cases?: number,
    deaths?: number,
    suspects?: number,
    refuses?: number,
    datetime?: string
}

const Stats: React.FC<StatsProps> = ( { state, cases, deaths, suspects, refuses}) => {
  let letality = 0

  if (deaths && cases) {
    letality = (deaths / cases * 100)
  }

  function formatNumber(num: number = 0) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace(',', '.').replace(',', '.')
  }

  return (
    <div className="stats-wrapper">
      <div id="stats-box">
        <div className="stats-content">
          <div className="stats-header">
            <img className="local-flag"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png" alt="Bandeira do Brasil"/>
            <h1>{state}</h1>
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
                <RiSkullFill />
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