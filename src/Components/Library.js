import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../Data';
import { changeShowLibrary, selectShowLibrary } from '../Store/ControlsSlice';
import { selectCurrent } from '../Store/SongsSlice';
import LibrarySong from './LibrarySong';

function Library() {
    const showLibrary = useSelector(selectShowLibrary);
    const currentSong = useSelector(selectCurrent);
    const dispatch = useDispatch();

    return (
        <div
            className='library'
            style={{ display: showLibrary ? 'block' : 'none' }}
            onClick={() => dispatch(changeShowLibrary())}
        >
            <div className='playlist'>
                {data().map((song, index) => (
                    <LibrarySong
                        key={index}
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
