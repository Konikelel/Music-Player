import React from 'react';

function LibrarySong({ name, cover, artist, active }) {
    return (
        <div
            className='librarySong'
            style={{ backgroundColor: active ? '#a0bff0' : '' }}
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
