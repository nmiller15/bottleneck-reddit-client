import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
}

const options = {
    name: 'searchBar',
    initialState, 
    reducers: {
        toggleSearchBar: (state) => {
            state.isActive = !state.isActive
            return state;
        }
    }
}

const searchBarSlice = createSlice(options);

export const { toggleSearchBar } = searchBarSlice.actions;
export default searchBarSlice.reducer;
