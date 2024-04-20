import React from 'react';
import arrow from '../../resources/Up-Arrow.svg';
import bigScore from '../../utils/bigScore.js';
import './Voter.css';
  
  const Voter = ({ score }) =>  {

    if (score > 999) {
        score = bigScore(score);
    }

	return (
	  <div className="Voter">
        <div className = "up-arrow-container arrow">
            <img src={arrow} alt="" />
        </div>
        <div className="score-container">
            <p>{score}</p>
        </div>
        <div className="down-arrow-container arrow">
            <img src={arrow} alt=""/>
        </div>
	  </div>
	);
  }
  
  export default Voter;
  