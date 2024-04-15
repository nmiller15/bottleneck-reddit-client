import React from 'react';
import './SideBar.css';
  
  const SideBar = () =>  {
	return (
	  <div className="SideBar">
        <div id="headline-container">
            <div id="logo-container">
                <img src="../../resources/glass-bottle-icon.svg" alt="Wine bottle icon"/>
            </div>
            <div id="text-container">
                <h1>Bottleneck</h1>
            </div>
        </div>
        <p>This is the SideBar Component</p>
	  </div>
	);
  }
  
  export default SideBar;
  