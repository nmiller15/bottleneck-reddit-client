import React from 'react';
import './SideBar.css';
import logo from '../../resources/bottleneck-logo.svg'
import champagneBottles from '../../resources/champagne-bottles-icon.svg'
import glassBottleIcon from '../../resources/glass-bottle-icon.svg'
import whiskeyBottle from '../../resources/fd3d3dfa-b6ef-46bf-a6dc-f7181d62d556.svg'
import cokeBottle from '../../resources/cola-drink-bottle-icon.svg'
import waterBottle from '../../resources/pet-bottle-icon.svg'
import babyBottle from '../../resources/drink-bottle-icon.svg'
import noLactose from '../../resources/lactose-milk-icon.svg'
import milkBottle from '../../resources/milk-water-bottle-icon.svg'
  
  const SideBar = () =>  {
	return (
	  <div className="SideBar">
        <div id="headline-container">
            <div id="logo-container">
                <img src={logo} alt="Wine bottle icon"/>
            </div>
            <div id="text-container">
                <h1>Bottleneck</h1>
            </div>
        </div>
        <div id="tagline">
            <p>Browsing the front page of the internet,<br/> one minute at a time... </p>
        </div>
        <div id="subreddit-list">
            <ul>
                <li className="subreddit">
                    <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={champagneBottles} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/all    
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={glassBottleIcon} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/pics   
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={whiskeyBottle} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/memes   
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={cokeBottle} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/wholesomememes  
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={waterBottle} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/BeAmazed
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={babyBottle} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/funny
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={noLactose} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/mildlyinfuriating  
                            </p>
                        </div>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            <img src={milkBottle} alt=""/>
                        </div>
                        <div className="subreddit-p-container">
                            <p>
                                r/facepalm
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
	  </div>
	);
  }
  
  export default SideBar;
  