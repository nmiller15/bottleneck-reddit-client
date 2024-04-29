import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedFilter: ''
}

const options = {
    name: 'filters',
    initialState,
    reducers: {
        setSelectedFilter: (state, action) => {
            state.selectedFilter = action.payload;
            return state;
        }
    }
}

const filtersSlice = createSlice(options);

export const { setSelectedFilter } = filtersSlice.actions;
export default filtersSlice.reducer;