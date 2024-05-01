import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postArray: [],
    sortFilter: 'hot'
}

const options = {
    name: 'feed',
    initialState, 
    reducers: {
        setPostArray: (state, action) => {
            state.postArray = action.payload;
            return state;
        },
        setSortFilter: (state, action) => {
            state.sortFilter = action.payload;
            return state;
        },
    }
}

const feedSlice = createSlice(options);
  
export const { setPostArray, setSortFilter } = feedSlice.actions;
export default feedSlice.reducer;