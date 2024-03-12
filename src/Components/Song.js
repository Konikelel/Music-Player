import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsPlaying } from '../Store/ControlsSlice';
import { selectCurrent } from '../Store/SongsSlice';

function Song() {
    const current = useSelector(selectCurrent);
    const isPlaying = useSelector(selectIsPlaying);

    return (
        <div className='song'>
            <img
                src={current.cover}
                alt={current.title}
                className={`picture ${isPlaying ? 'rotate' : ''}`}
            />
            <h2 className='title'>{current.name}</h2>
            <h3 className='author'>{current.artist}</h3>
        </div>
    );
}

export default Song;
