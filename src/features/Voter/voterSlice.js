import { createSlice } from '@reduxjs/toolkit'

const options = {
    name: 'voterSlice',
    initialState: [], 
    reducers: {

    }
}

const voterSlice = createSlice(options);
// export your actions with export const { named actions } = postModalSlice.actions;
export default voterSlice.reducer;
  
  