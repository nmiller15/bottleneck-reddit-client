import React from 'react';
import arrow from '../../resources/Up-Arrow.svg';
import bigScore from '../../utils/bigScore.js';
import './Voter.css';

import { useState } from 'react';
// Arrow color and selection status is going to be controlled by the store.
// Arrow hover states can be controlled by CSS
  
  const Voter = ({ score }) =>  {
    const [voterStatus, setVoterStatus] = useState(''); // '' 'up' 'down'

    if (score > 999) {
        score = bigScore(score);
    }

    const handleUpvoteClick = () => {
      if (voterStatus === "up") {
        setVoterStatus('');
      } else {
        setVoterStatus('up');
      }
    }

    const handleDownvoteClick = () => {
      if (voterStatus === "down") {
        setVoterStatus('');
      } else {
        setVoterStatus('down');
      }
    }

	  return (
	    <div className={
        voterStatus === "up" ? "Voter up" :
        voterStatus === "down" ? "Voter down" :
        "Voter"
      }>
          <div className ="up-arrow-container arrow">
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2692 1L1.34616 10.1259H6.55129V17.7308H13.9872V10.1259H19.1923L10.2692 1Z" fill="rgba(0,0,0,0)" stroke="#E68B91" onClick={handleUpvoteClick}/>
            </svg>
          </div>
          <div className="score-container">
                <p>{score}</p>
          </div>
          <div className="down-arrow-container arrow">
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2692 1L1.34616 10.1259H6.55129V17.7308H13.9872V10.1259H19.1923L10.2692 1Z" fill="rgba(0,0,0,0)" stroke="#E68B91" onClick={handleDownvoteClick}/>
            </svg>
          </div>
	    </div>
	  );
  }
  
  export default Voter;
  