import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    time: 60,
}

const options = {
    name: 'timer',
    initialState,
    reducers: {
        decrementTime: (state) => {
            state.time = state.time - 1;
            return state;
        },
        resetTime: (state) => {
            state.time = 60;
            return state;
        }
    }
}

const timerSlice = createSlice(options);


export const { decrementTime, resetTime } = timerSlice.actions;
export default timerSlice.reducer 