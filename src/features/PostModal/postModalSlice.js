import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
}

const options = {
    name: 'postModal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isActive = !state.isActive
            return state;
        },
    }
}

const postModalSlice = createSlice(options);

export const { toggleModal } = postModalSlice.actions;
export default postModalSlice.reducer 