import { configureStore } from '@reduxjs/toolkit';
import controlsReducer from './ControlsSlice';
import songsReducer from './SongsSlice';

export default configureStore({
    reducer: {
        songs: songsReducer,
        controls: controlsReducer,
    },
});
