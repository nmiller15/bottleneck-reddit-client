import React from 'react';
import './Filters.css';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter } from './filtersSlice';

const Filters = () =>  {
  const selectedFilter = useSelector((state) => state.filters.selectedFilter);
  const dispatch = useDispatch();
  const filtersArray = ["Best", "Hot", "New", "Top", "Rising"];
  
  const handleClick = (index) => {
    dispatch(setSelectedFilter(filtersArray[index]));
  }
  
	return (
        <div id="filters">
            <ul>
                {filtersArray.map((filter, index) => {
                  return (
                    <li 
                      key={index} 
                      onClick={() => handleClick(index)}
                      className={
                        selectedFilter === filter ?
                         "active" :
                         ""
                      }>
                        {filter}
                    </li>
                  ) 
                })}
            </ul>
        </div>
	);
  }
  
export default Filters;
  