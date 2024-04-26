import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
}

const options = {
    name: 'searchBar',
    initialState, 
    reducers: {
        activateSearchBar: (state) => {
            state.isActive = true;
            return state;
        },
        deactivateSearchBar: (state) => {
            state.isActive = false;
            return state;
        }
    }
}

const searchBarSlice = createSlice(options);

export const { activateSearchBar, deactivateSearchBar } = searchBarSlice.actions;
export default searchBarSlice.reducer;
