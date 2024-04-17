import React from 'react';
// import SearchBar from '../SearchBar/SearchBar.js'
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg'
  
  const Feed = () =>  {
	return (
	  <div className="Feed">
        <header>
            <div id="filters">
                <ul>
                    <li>Best</li>
                    <li>Hot</li>
                    <li>New</li>
                    <li>Top</li>
                    <li>Rising</li>
                </ul>
            </div>
            <div id="search-bar-container">
            
            </div>
            <div id="search-icon-container">
                <img src={searchIcon} alt="search"/>
            </div>
        </header>
        <div id="content-container">
            <div className="mock-post">
                <p>this is a post, but a Card will go here later</p>
            </div>
        </div>
	  </div>
	);
  }
  
  export default Feed;
  