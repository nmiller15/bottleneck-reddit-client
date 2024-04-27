import React from 'react';
import './SearchBar.css';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSearchText, deactivateSearchBar } from './searchBarSlice';

  const SearchBar = ({ reRender }) =>  {
  const [inputValue, setInputValue] = useState('');
  const searchText = useSelector((state) => state.searchText);
  const dispatch = useDispatch();

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchText(inputValue));
    dispatch(deactivateSearchBar());
    setInputValue('');
    reRender();
  }
  
	return (
	    <div id="SearchBar"> 
        <form onSubmit={handleSubmit}>
            <input 
              id="text-field" 
              type="text" 
              name="search" 
              value={inputValue}
              onChange={handleChange}
            />
            <input 
              id="submit-button" 
              type="submit" 
              value="Search"
            />
        </form>
	    </div>
	);
  }
  
  export default SearchBar;
  