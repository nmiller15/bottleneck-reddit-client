import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const initialState = {
    count: 0
}

const options = {
    name: 'counter',
    initialState,
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.count++
            return state;
        }, 
        resetCount: (state) => {
            state.count = 0
            return state;
        }
    }
}

const counterSlice = createSlice(options);
  
export const { incrementCount, resetCount } = counterSlice.actions;
export default counterSlice.reducer;