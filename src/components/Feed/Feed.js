import React from 'react';
import SearchBar from '../../features/SearchBar/SearchBar.js';
import Card from '../Card/Card.js';
import PostModal from '../../features/PostModal/PostModal.js';
import Filters from '../../features/Filters/Filters.js';
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg';
import mockJson from '../../mock/reddit-all-mock.json';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, setPermalink } from '../../features/PostModal/postModalSlice.js';
import { activateSearchBar, deactivateSearchBar } from '../../features/SearchBar/searchBarSlice.js';

const Feed = () =>  {
  // bring in mocked front page data: probably will do this with the subreddits initial state in the end
  const postArray = mockJson.data.children;

  // State variables for PostModal
  const modalIsActive = useSelector((state) => state.postModal.isActive);
  const permalink = useSelector((state) => state.postModal.permalink);

  // State variables for SearchBar
  const searchBarIsActive = useSelector((state) => state.searchBar.isActive);

  const dispatch = useDispatch();

  // State manipulation callbacks
  const dispatchToggleModal = () => {
    dispatch(toggleModal());
  }

  const dispatchActivateSearchBar = () => {
    dispatch(activateSearchBar());
  }

  const dispatchDeactivateSearchBar = () => {
    dispatch(deactivateSearchBar());
  }

  return (
    <div className="Feed">
        <header>
            <Filters />
            <div id="search-icon-container" onClick={dispatchActivateSearchBar}>
                { searchBarIsActive ? 
                  <SearchBar /> :
                <img src={searchIcon} alt="search"/>
                }
            </div>
        </header>
        <div 
          id="content-container"
          className={modalIsActive ? "hide" : ""}
          onClick={dispatchDeactivateSearchBar}
        >
          {postArray.map((post, index) => {
            return <Card key={index} post={post} toggle={dispatchToggleModal}/>
          })}
        </div>
        <div 
          id="modal-container" 
          className={modalIsActive ? "" : "hide"}
        >
          {modalIsActive && <PostModal toggle={dispatchToggleModal} permalink={permalink} />}
        </div>
    </div>
  );
}
  
  export default Feed;
