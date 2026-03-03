import React from 'react';
import { STATS_DATA } from '../HeroSection/hero.constants';
import useCounter from '../../hooks/useCounter';
import './Stats.css';

const Stats = ({ scrollProgress }) => {
  return (
    <div className="stats-container">
      {STATS_DATA.map((stat) => {
        const isVisible = scrollProgress >= stat.triggerPoint;
        
        return (
          <StatItem 
            key={stat.id}
            stat={stat}
            isVisible={isVisible}
          />
        );
      })}
    </div>
  );
};

const StatItem = ({ stat, isVisible }) => {
  const numericValue = parseInt(stat.value);
  
  const animatedValue = useCounter(
    numericValue, 
    2000,
    isVisible
  );

  const suffix = stat.value.replace(/[0-9]/g, '');

  return (
    <div
      className={`stat-item stat-${stat.position} ${isVisible ? 'visible' : ''}`}
      data-id={stat.id}
    >
      <div className="stat-value">
        <span className="stat-number">{animatedValue}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

export default Stats;