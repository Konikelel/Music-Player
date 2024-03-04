import {
    faAngleLeft,
    faAngleRight,
    faPlay,
    faVolumeLow,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { back, forward } from '../store/songsSlice';

function Player() {
    const dispatch = useDispatch();

    return (
        <div className='player'>
            <div className='timeControl'>
                <p className='timeStart'>0:00</p>
                <input
                    type='range'
                    min='1'
                    max='100'
                    value='50'
                    className='timeSlider'
                />
                <p className='timeEnd'>2:17</p>
            </div>
            <div className='playControl'>
                <FontAwesomeIcon
                    onClick={() => dispatch(back())}
                    className='skipBack'
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon className='play' icon={faPlay} />
                <FontAwesomeIcon
                    onClick={() => dispatch(forward())}
                    className='skipForward'
                    icon={faAngleRight}
                />
                <FontAwesomeIcon className='volume' icon={faVolumeLow} />
                <input
                    type='range'
                    min='1'
                    max='100'
                    value='50'
                    className='volumeSlider'
                />
            </div>
        </div>
    );
}

export default Player;
