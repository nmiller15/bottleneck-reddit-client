import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
    searchText: ''
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
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
            return state;
        }
    }
}

const searchBarSlice = createSlice(options);

export const { activateSearchBar, deactivateSearchBar, setSearchText } = searchBarSlice.actions;
export default searchBarSlice.reducer;
