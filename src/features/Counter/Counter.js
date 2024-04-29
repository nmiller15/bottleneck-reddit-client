import React from 'react';
import './Counter.css';

const Counter = () => {
    return (
        <div id="Counter">
            <div id="clock-container">
                <p>0:15</p>
            </div>
            <div id="call-count-container">
                <p>6</p>
            </div>
            <div id="label-container">
                <p>requests until your<br/>rate is limited</p>
            </div>
        </div>
    )
}

export default Counter;