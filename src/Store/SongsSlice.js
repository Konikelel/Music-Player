import { createSlice } from '@reduxjs/toolkit';
import data from '../Data';

const updateCurrentSong = (state, index) => {
    state.data[state.position].active = false;
    state.data[index].active = true;

    state.current = state.data[index];
    state.position = index;
};

export const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        current: data()[0],
        position: 0,
        data: data(),
    },
    reducers: {
        forward: (state) => {
            updateCurrentSong(
                state,
                state.data.length > state.position + 1 ? state.position + 1 : 0
            );
        },
        back: (state) => {
            updateCurrentSong(
                state,
                0 < state.position ? state.position - 1 : state.data.length - 1
            );
        },
    },
    selectors: {
        selectCurrent: (state) => state.songs.current,
        selectSongs: (state) => state.data,
    },
});

export const { forward, back } = songsSlice.actions;

export const selectCurrent = (state) => state.songs.current;
export const selectSongs = (state) => state.songs.data;

export default songsSlice.reducer;
