import { createSlice } from '@reduxjs/toolkit'

const options = {
    name: 'searchBar',
    initialState: [], 
    reducers: {

    }
}

const searchBarSlice = createSlice(options);

// export your actions with export const { named actions } = postModalSlice.actions;
export default searchBarSlice.reducer;
