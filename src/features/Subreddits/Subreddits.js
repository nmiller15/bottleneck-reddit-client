import React from 'react';
import './Subreddits.css';
import champagneBottles from '../../resources/champagne-bottles-icon.svg'
import glassBottleIcon from '../../resources/glass-bottle-icon.svg'
import whiskeyBottle from '../../resources/fd3d3dfa-b6ef-46bf-a6dc-f7181d62d556.svg'
import cokeBottle from '../../resources/cola-drink-bottle-icon.svg'
import waterBottle from '../../resources/pet-bottle-icon.svg'
import babyBottle from '../../resources/drink-bottle-icon.svg'
import noLactose from '../../resources/lactose-milk-icon.svg'
import milkBottle from '../../resources/milk-water-bottle-icon.svg'

import { useSelector, useDispatch } from 'react-redux'
import { setSubredditSelection } from '../../components/Feed/feedSlice';

  const Subreddits = () =>  {
    const subredditSelection = useSelector((state) => state.feed.subredditSelection);
    const dispatch = useDispatch();

    const subredditArray = ['r/all', 'r/pics', 'r/memes', 'r/wholesomememes', 'r/BeAmazed', 'r/funny', 'r/mildlyinfuriating', 'r/facepalm'];
    const imageSourceArray = [champagneBottles, glassBottleIcon, whiskeyBottle, cokeBottle, waterBottle, babyBottle, noLactose, milkBottle];
    
    const handleSelectSubreddit = (subreddit) => {
        dispatch(setSubredditSelection(subreddit));
    }

    const handleClear = () => {
        dispatch(setSubredditSelection(''));
    }

    return (
        <div id="subreddit-list">
            <ul>
                {subredditArray.map((subreddit, index) => {
                    return (
                        <li 
                          className={subredditSelection === subreddit ?
                            "subreddit active" :
                            "subreddit"}
                        >
                            <button onClick={() => {
                                if (subredditSelection === subreddit) {
                                    handleClear();
                                } else {
                                    handleSelectSubreddit(subreddit)}
                                }}>
                                <div className="subreddit-icon-container">
                                    <img src={imageSourceArray[index]} alt="icon" />
                                </div>
                                <div className="subreddit-p-container">
                                    <p>
                                        {subreddit}
                                    </p>
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
  }
  
  export default Subreddits;
  