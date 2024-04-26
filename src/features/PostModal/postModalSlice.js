import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
    permalink: "", 
    postData: {
        title: '',
        description: '',
        author: '',
        subreddit: '',
        score: null,
        numComments: null,
        commentArray: [],
        postHint: null,
        post: {}
    }
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
        },
        setPostData: (state, action) => {
            state.postData = action.payload;
            return state;
        }
    }
}

const postModalSlice = createSlice(options);

export const { toggleModal, setPermalink, setPostData } = postModalSlice.actions;
export default postModalSlice.reducer 