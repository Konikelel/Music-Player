import {
    faAngleLeft,
    faAngleRight,
    faPlay,
    faVolumeLow,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Player() {
    return (
        <div className='player'>
            <div className='timeControl'>
                <p className='timeStart'>0:00</p>
                <input
                    type='range'
                    min='1'
                    max='100'
                    value='50'
                    class='timeSlider'
                />
                <p className='timeEnd'>2:17</p>
            </div>
            <div className='playControl'>
                <FontAwesomeIcon className='skipBack' icon={faAngleLeft} />
                <FontAwesomeIcon className='play' icon={faPlay} />
                <FontAwesomeIcon className='skipForward' icon={faAngleRight} />
                <FontAwesomeIcon className='volume' icon={faVolumeLow} />
                <input
                    type='range'
                    min='1'
                    max='100'
                    value='50'
                    class='volumeSlider'
                />
            </div>
        </div>
    );
}

export default Player;
