import React from 'react';
import SearchBar from '../../features/SearchBar/SearchBar.js';
import Card from '../Card/Card.js';
import PostModal from '../../features/PostModal/PostModal.js';
import Filters from '../../features/Filters/Filters.js';
import Popover from '../Popover/Popover.js'
import './Feed.css';
import searchIcon from '../../resources/Search Icon.svg';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../features/PostModal/postModalSlice.js';
import { activateSearchBar, deactivateSearchBar, setSearchText } from '../../features/SearchBar/searchBarSlice.js';
import { setPostArray } from './feedSlice.js';
import { incrementCount } from '../../features/Counter/counterSlice';

const Feed = () =>  {
  const postArray = useSelector((state) => state.feed.postArray);
  const subredditSelection = useSelector((state) => state.subreddits.subredditSelection);
  const filtersSelection = "/" + useSelector((state) => state.filters.selectedFilter).toLowerCase();
  const count = useSelector((state) => state.counter.count);
  const time = useSelector((state) => state.timer.time);

  // State variables for PostModal
  const modalIsActive = useSelector((state) => state.postModal.isActive);
  const permalink = useSelector((state) => state.postModal.permalink);

  // State variables for SearchBar
  const searchBarIsActive = useSelector((state) => state.searchBar.isActive);
  const searchText = useSelector((state) => state.searchBar.searchText);
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

  const dispatchClearSearch = () => {
    dispatch(setSearchText(''));
  }

  const handleScroll = () => {
    if (searchBarIsActive) {
      dispatchDeactivateSearchBar();
    }
  }

  // Close the search bar on the widow scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => { 
      window.removeEventListener("scroll", handleScroll);
    }
  })

  // Fetch and load posts
  useEffect(() => {
    const fetchPostArray = async () => {
      try {
        if (10 - count < 1) {
          dispatch(setPostArray([]));
          return;
        }
        const response = await fetch(`https://www.reddit.com/${subredditSelection}${filtersSelection}.json`);
        dispatch(incrementCount());
        if (!response.ok) {
          throw new Error('Network response failed.');
        }
        const responseObject = await response.json();
        console.log(responseObject);
        if (!responseObject) {
          console.log('No response object.');
          return;
        }
        const array = responseObject.data.children;
        dispatch(setPostArray(array));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        console.error(e);
      }
    }
    fetchPostArray();

  }, [subredditSelection, filtersSelection, dispatch]);

  if (!postArray) {
    return <div className="pop-over">Loading...</div>;
  }

  

  return (
    <div className="Feed">
        <header>
            <Filters />
            <div id="search-icon-container">
              { searchText && !searchBarIsActive ?
                <button id="clear-search" onClick={dispatchClearSearch}>Clear Search Filter</button> :
                <></>
              }
              { searchBarIsActive ? 
                <SearchBar /> :
                <img src={searchIcon} alt="search" onClick={dispatchActivateSearchBar}/>
              }
            </div>
        </header>
        <div 
          id="content-container"
          className={modalIsActive ? "hide" : ""}
          onClick={dispatchDeactivateSearchBar}
        >
          {count > 9 &&
            <div className="pop-over">
              <div className="pop-over-container">
                <p className="bottle-emoji">🍾</p>
                <h3>Bottlenecked....</h3>
                <p>Your rate has been limited for {time} more seconds.</p>
              </div>
            </div>
          }
          {postArray.map((post, index) => {
              const lcTitle = post.data.title.toLowerCase();
              const lcSearchText = searchText.toLowerCase();
              if(searchText && !lcTitle.includes(lcSearchText)) return;
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
