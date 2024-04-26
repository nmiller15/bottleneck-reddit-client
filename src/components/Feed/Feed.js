import React from 'react';
import SearchBar from '../../features/SearchBar/SearchBar.js';
import Card from '../Card/Card.js';
import PostModal from '../../features/PostModal/PostModal.js';
import Filters from '../../features/Filters/Filters.js';
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg';
import mockJson from '../../mock/reddit-all-mock.json';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../features/PostModal/postModalSlice.js';

const Feed = () =>  {

  const postArray = mockJson.data.children;
  const modalIsActive = useSelector((state) => state.postModal.isActive);
  const dispatch = useDispatch();

  const dispatchToggleModal = () => {
    console.log("toggle dispatched");
    dispatch(toggleModal());
    console.log("modalIsActive? - ", modalIsActive);
  }

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
        <div 
          id="content-container"
          className={modalIsActive ? "" : "hide"}
        >
          {postArray.map((post, index) => {
            return <Card key={index} post={post} toggle={dispatchToggleModal}/>
          })}
        </div>
        <div 
          id="modal-container" 
          className={modalIsActive ? "hide" : ""}
        >
          <PostModal toggle={dispatchToggleModal} />
        </div>
    </div>
  );
}
  
  export default Feed;
