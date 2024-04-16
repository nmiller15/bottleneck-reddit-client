import React from 'react';
import './SideBar.css';
import logo from '../../resources/bottleneck-logo.svg'
  
  const SideBar = () =>  {
	return (
	  <div className="SideBar">
        <div id="headline-container">
            <div id="logo-container">
                <img src={logo} alt="Wine bottle icon"/>
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
  