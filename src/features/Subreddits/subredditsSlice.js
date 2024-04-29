import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    subredditSelection: ''
}

const options = {
    name: 'subredditsSlice',
    initialState,
    reducers: {
        setSubredditSelection: (state, action) => {
            state.subredditSelection = action.payload;
            return state;
        }
    }
}

const subredditsSlice = createSlice(options);

export const { setSubredditSelection } = subredditsSlice.actions;
export default subredditsSlice.reducer;