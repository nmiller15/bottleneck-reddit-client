import React from 'react';
import './Counter.css';
import Timer from '../Timer/Timer';

import { useSelector, useDispatch } from 'react-redux';
import { incrementCount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(incrementCount());
    }
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(incrementCount());
    }
    return (
        <div id="Counter">
            <Timer />
            <div id="call-count-container" onClick={handleClick}>
                <p>{10 - count}</p>
            </div>
            <div id="label-container">
                <p>requests until your<br/>rate is limited</p>
            </div>
        </div>
    )
}

export default Counter;