import { createSlice } from '@reduxjs/toolkit'

const options = {
    name: 'postModal',
    initialState: [], 
    reducers: {

    }
}

const postModalSlice = createSlice(options);

// export your actions with export const { named actions } = postModalSlice.actions;
export default postModalSlice.reducer 