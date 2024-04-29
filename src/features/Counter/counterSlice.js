import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const options = {
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.count++
            return state;
        }
    }
}

const counterSlice = createSlice(options);
  
export const { incrementCount } = counterSlice.actions;
export default counterSlice.reducer;