import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
    permalink: ""
}

const options = {
    name: 'postModal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isActive = !state.isActive
            return state;
        },
        setPermalink: (state, action) => {
            state.permalink = action.payload;
            return state;
        }
    }
}

const postModalSlice = createSlice(options);

export const { toggleModal, setPermalink } = postModalSlice.actions;
export default postModalSlice.reducer 