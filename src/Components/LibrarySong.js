import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../Store/SongsSlice';

function LibrarySong({ index, name, cover, artist, active }) {
    const dispatch = useDispatch();

    return (
        <div
            className='librarySong'
            style={{ backgroundColor: active ? '#a0bff0' : '' }}
            onClick={(e) => {
                e.stopPropagation();
                dispatch(setCurrent({ index: index }));
            }}
        >
            <img src={cover} alt={name} className='picture' />
            <div className='songData'>
                <h4 className='title'>{name}</h4>
                <p className='autor'>{artist}</p>
            </div>
        </div>
    );
}

export default LibrarySong;
