import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './SongsSlice';

export default configureStore({
    reducer: {
        songs: songsReducer,
    },
});
