import { createSlice } from '@reduxjs/toolkit'

const options = {
    name: 'filters',
    initialState: [], 
    reducers: {

    }
}

const filtersSlice = createSlice(options);

// export your actions with export const { named actions } = postModalSlice.actions;
export default filtersSlice.reducer;