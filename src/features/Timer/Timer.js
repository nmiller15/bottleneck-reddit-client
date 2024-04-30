import React from 'react';
import './Timer.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementTime, resetTime } from './timerSlice';
import { resetCount } from '../Counter/counterSlice';

  const Timer = () =>  {
	const time = useSelector((state) => state.timer.time);
	const dispatch = useDispatch();

	const countdownTimerFunc = () => {
	}
	
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (time > 0) {
				console.log("Time greater than 0");
				dispatch(decrementTime());
			  } else {
				console.log("Reset");
				dispatch(resetTime());
				dispatch(resetCount());
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [dispatch, time]);
	
	return (
		<div id="clock-container">
			<p id="timer">{time}</p>
		</div>
	);
  }
  
  
  export default Timer;
  