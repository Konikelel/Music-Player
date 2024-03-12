import React from 'react';
import { useSelector } from 'react-redux';
import data from '../Data';
import { selectCurrent } from '../Store/SongsSlice';
import LibrarySong from './LibrarySong';

function Library() {
    const currentSong = useSelector(selectCurrent);
    return (
        <div className='library'>
            <div className='playlist'>
                {data().map((song) => (
                    <LibrarySong
                        name={song.name}
                        cover={song.cover}
                        artist={song.artist}
                        active={song.name == currentSong.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
