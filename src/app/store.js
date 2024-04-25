import { configureStore } from '@reduxjs/toolkit'
import postModalReducer from '../features/PostModal/postModalSlice';
import searchBarReducer from '../features/SearchBar/searchBarSlice';
import subredditsReducer from '../features/Subreddits/subredditsSlice';
import counterReducer from '../features/Counter/counterSlice';
import voterReducer from '../features/Voter/voterSlice';

const store =  configureStore({
    reducer: {
        postModal: postModalReducer,
        searchBar: searchBarReducer,
        subreddits: subredditsReducer,
        // timer: timerReducer,
        counter: counterReducer,
        voter: voterReducer
    }
})

export default store;