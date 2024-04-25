import { createSlice } from '@reduxjs/toolkit'

const options = {
    name: 'counter',
    initialState: [], 
    reducers: {

    }
}

const counterSlice = createSlice(options);
  
// export your actions with export const { named actions } = postModalSlice.actions;
export default counterSlice.reducer;