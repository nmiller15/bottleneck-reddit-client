import React from 'react';
import './Filters.css';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter } from './filtersSlice';

  const Filters = () =>  {
	return (
        <div id="filters">
            <ul>
                <li>Best</li>
                <li>Hot</li>
                <li>New</li>
                <li>Top</li>
                <li>Rising</li>
            </ul>
        </div>
	);
  }
  
  export default Filters;
  