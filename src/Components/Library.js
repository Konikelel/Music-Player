import React from 'react';
import { useSelector } from 'react-redux';
import data from '../Data';
import { selectCurrent } from '../Store/SongsSlice';
import LibrarySong from './LibrarySong';

function Library({ showLibrary, setShowLibrary }) {
    const currentSong = useSelector(selectCurrent);
    return (
        <div
            className='library'
            style={{ display: showLibrary ? 'block' : 'none' }}
            onClick={() => setShowLibrary(!showLibrary)}
        >
            <div className='playlist'>
                {data().map((song, index) => (
                    <LibrarySong
                        index={index}
                        name={song.name}
                        cover={song.cover}
                        artist={song.artist}
                        active={song.name === currentSong.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
