import { createSlice } from '@reduxjs/toolkit';

export const controlsSlice = createSlice({
    name: 'controls',
    initialState: {
        isPlaying: false,
        showLibrary: false,
    },
    reducers: {
        changeIsPlaying: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        changeShowLibrary: (state) => {
            state.showLibrary = !state.showLibrary;
        },
    },
});

export const { changeIsPlaying, changeShowLibrary } = controlsSlice.actions;

export const selectIsPlaying = (state) => state.controls.isPlaying;
export const selectShowLibrary = (state) => state.controls.showLibrary;

export default controlsSlice.reducer;
