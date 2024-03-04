import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../store/songsSlice';

function Song() {
    const current = useSelector(selectCurrent);

    return (
        <div className='song'>
            <img src={current.cover} alt={current.title} className='picture' />
            <h2 className='title'>{current.name}</h2>
            <h3 className='author'>{current.artist}</h3>
        </div>
    );
}

export default Song;
