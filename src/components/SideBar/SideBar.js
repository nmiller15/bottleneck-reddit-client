import React from 'react';
import Subreddits from '../../features/Subreddits/Subreddits';
import './SideBar.css';
import logo from '../../resources/bottleneck-logo.svg'
  
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
        
        <Subreddits />
        
        <div id="counter">
            <div id="clock-container">
                <p>0:15</p>
            </div>
            <div id="call-count-container">
                <p>6</p>
            </div>
            <div id="label-container">
                <p>requests until your<br/>rate is limited</p>
            </div>
        </div>
        <div id="cta">
            <div id="cta-button">
                <a href="mailto:contact@reddit.com">
                    Contact Reddit
                </a>
            </div>
            <div id="cta-body">
                <p>
                If using reddit this way is annoying, then tell Reddit about it! If Reddit is truly the front page of the internet, we shouldn’t be stuck on their home page. Write an email to contact@reddit.com.
                </p>
            </div>
        </div>
	  </div>
	);
  }
  
  export default SideBar;
  