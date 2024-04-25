import { createSlice } from '@reduxjs/toolkit'

const options = {
    name: 'subredditsSlice',
    initialState: [], 
    reducers: {

    }
}

const subredditsSlice = createSlice(options);

// export your actions with export const { named actions } = postModalSlice.actions;
export default subredditsSlice.reducer;