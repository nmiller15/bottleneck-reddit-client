import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import Card from '../Card/Card.js';
import PostModal from '../PostModal/PostModal.js';
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg';
import mockJson from '../../mock/reddit-all-mock.json';


const Feed = () =>  {

  const postArray = mockJson.data.children;
  

  return (
    <div className="Feed">
        <header>
          <div className="flex-container">
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
          </div>
        </header>
        <div id="content-container">
          {postArray.map((post, index) => {
            return <Card key={index} post={post}/>
          })}
        </div>
        <div id="modal-container">
          <PostModal />
        </div>
    </div>
  );
}
  
  export default Feed;
