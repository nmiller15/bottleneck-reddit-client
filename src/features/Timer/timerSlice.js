import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const options = {
    name: 'timer',
    initialState,
    reducers: {

    }
}

const timerSlice = createSlice(options);


export const { decrementTime, resetTime } = timerSlice.actions;
export default timerSlice.reducer 