import React from 'react';
import './Popover.css';

import { useSelector } from 'react-redux'

const Popover = () => {
    const count = useSelector((state) => state.counter.count);
    const time = useSelector((state) => state.timer.time);

    return (
        <>
          {count > 9 &&
            <div className="pop-over">
              <div className="pop-over-container">
                <p className="bottle-emoji">🍾</p>
                <h3>Bottlenecked....</h3>
                <p>Your rate has been limited for {time} more seconds.</p>
              </div>
            </div>
          }  
        </>
    )
}

export default Popover