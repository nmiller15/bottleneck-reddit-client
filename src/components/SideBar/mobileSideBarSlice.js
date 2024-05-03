import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mobileSidebarIsActive: false,
}

const options = {
    name: 'mobileSideBar',
    initialState, 
    reducers: {
        activateMobileSidebar: (state) => {
            state.mobileSidebarIsActive = true;
            return state
        },
        deactivateMobileSidebar: (state) => {
            state.mobileSidebarIsActive = false;
            return state;
        }
    }
}

const mobileSideBarSlice = createSlice(options);
  
export const { activateMobileSidebar, deactivateMobileSidebar } = mobileSideBarSlice.actions;
export default mobileSideBarSlice.reducer;