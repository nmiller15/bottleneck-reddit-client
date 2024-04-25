import React from 'react';
import SearchBar from '../../features/SearchBar/SearchBar.js';
import Card from '../Card/Card.js';
import PostModal from '../../features/PostModal/PostModal.js';
import Filters from '../../features/Filters/Filters.js';
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg';
import mockJson from '../../mock/reddit-all-mock.json';


const Feed = () =>  {

  const postArray = mockJson.data.children;
  

  return (
    <div className="Feed">
        <header>
            <Filters />
            <div id="search-bar-container">
              <SearchBar />
            </div>
            <div id="search-icon-container">
                <img src={searchIcon} alt="search"/>
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
