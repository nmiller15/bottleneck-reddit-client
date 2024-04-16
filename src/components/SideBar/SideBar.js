import React from 'react';
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
        <div id="subreddit-list">
            <ul id="subreddit-ul">
                <li className="subreddit">
                    <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/all    
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/pics   
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/memes   
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/wholesomememes  
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/BeAmazed
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/funny
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/mildlyinfuriating  
                        </p>
                    </a>
                </li>
                <li className="subreddit">
                <a href="#" target="_blank">
                        <div className="subreddit-icon-container">
                            {/*<img src={} alt=""/>*/}
                        </div>
                        <p>
                            r/facepalm
                        </p>
                    </a>
                </li>
            </ul>
        </div>
	  </div>
	);
  }
  
  export default SideBar;
  