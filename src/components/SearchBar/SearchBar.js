import React from 'react';
import './SearchBar.css';
  
  const SearchBar = () =>  {
	return (
	    <div id="SearchBar"> 
            <input id="text-field" type="text" name="search"/>
            <input id="submit-button" type="submit" value="Search"/>
	    </div>
	);
  }
  
  export default SearchBar;
  