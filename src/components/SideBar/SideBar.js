import React, { useState, useEffect } from 'react';
import Subreddits from '../../features/Subreddits/Subreddits';
import Counter from '../../features/Counter/Counter';
import './SideBar.css';
import logo from '../../resources/bottleneck-logo.svg';
import exit from '../../resources/X.svg';

import { useSelector, useDispatch } from 'react-redux'; 
import { activateMobileSidebar, deactivateMobileSidebar } from './mobileSideBarSlice';

const SideBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const mobileSidebarIsActive = useSelector((state) => state.mobileSideBar.mobileSidebarIsActive);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(activateMobileSidebar());
    }

    const handleExit = () => {
        console.log("CLOSE!");
        dispatch(deactivateMobileSidebar());
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div
                className={screenWidth < 933 && mobileSidebarIsActive ? "exit-button" : "exit-button hidden"}
                onClick={handleExit}
            >
                <img src={exit} alt=''/>
            </div>
            <button 
                className={screenWidth > 932 ? "activate-sidebar-button below-screen" : "activate-sidebar-button"}
                onClick={handleClick}
            >
                <div className="logo-container">
                    <img src={logo} alt="Wine bottle icon"/>
                </div>
            </button>
            <div className={screenWidth < 933 && !mobileSidebarIsActive ? "SideBar collapsed" : "SideBar"}>
                <div id="headline-container">
                    <div className="logo-container">
                        <img src={logo} alt="Wine bottle icon"/>
                    </div>
                    <div id="text-container">
                        <h1>Bottleneck</h1>
                    </div>
                </div>
                <div id="tagline">
                    <p>Browsing the front page of the internet,<br/> one minute at a time... </p>
                </div>
                
                <Subreddits />
                
                <Counter />

                <div id="cta">
                    <div id="cta-button">
                        <a href="mailto:contact@reddit.com">
                            Contact Reddit
                        </a>
                    </div>
                    <div id="cta-body">
                        <p>
                            If using reddit this way is annoying, then tell Reddit about it! If Reddit is truly the front page of the internet, we shouldn’t be stuck on their home page. Write an email to contact@reddit.com.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;
