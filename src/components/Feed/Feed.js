import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'
import Card from '../Card/Card.js'
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg';



  
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
              <SearchBar />
            </div>
            <div id="search-icon-container">
                <img src={searchIcon} alt="search"/>
            </div>
        </header>
        <div id="content-container">
            <Card />
        </div>
	  </div>
	);
  }
  
  export default Feed;
  