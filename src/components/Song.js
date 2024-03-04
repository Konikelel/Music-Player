import React from 'react';

function Song() {
    return (
        <div className='song'>
            <img
                src='/assets/covers/CanaryForest.jpg'
                alt='Song Cover'
                className='picture'
            />
            <h2 className='title'>Beaver Creek</h2>
            <h3 className='author'>Aso, Middle School, Aviino</h3>
        </div>
    );
}

export default Song;
