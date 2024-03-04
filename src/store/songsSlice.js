import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

const updateCurrentSong = (state, index) => {
    console.log(index, JSON.stringify(state.data));
    console.log(index, state.position);
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
        selectCurrent: (state) => state.current,
        selectSongs: (state) => state.data,
    },
});

export const { forward, back } = songsSlice.actions;
export default songsSlice.reducer;
