import {
    faAngleLeft,
    faAngleRight,
    faPause,
    faPlay,
    faVolumeLow,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { back, forward, selectCurrent } from '../Store/SongsSlice';

const timeFormatter = (time) =>
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

function Player() {
    const audioRef = useRef();
    const dispatch = useDispatch();
    const currentSong = useSelector(selectCurrent);
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeData, setTimeData] = useState({ current: 0, end: 0 });
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);

    const handlePlay = async () => {
        if (!isPlaying) {
            await audioRef.current.play();
        } else {
            await audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSkip = async (action) => {
        await dispatch(action());

        if (isPlaying) {
            await audioRef.current.play();
        }
    };

    return (
        <div className='player'>
            <audio
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={(e) =>
                    setTimeData({
                        current: e.target.currentTime,
                        end: e.target.duration,
                    })
                }
                onTimeUpdate={(e) =>
                    setTimeData({
                        ...timeData,
                        current: e.target.currentTime,
                    })
                }
                onEnded={(e) => handleSkip(forward)}
            />
            <div className='timeControl'>
                <p className='timeStart'>0:00</p>
                <input
                    type='range'
                    min={0}
                    max={timeData.end}
                    value={timeData.current}
                    className='timeSlider'
                    onClick={(e) => console.log(e)}
                />
                <p className='timeEnd'>{timeFormatter(timeData.end)}</p>
            </div>
            <div className='playControl'>
                <FontAwesomeIcon
                    onClick={() => handleSkip(back)}
                    className='skipBack'
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    className='play'
                    icon={isPlaying ? faPause : faPlay}
                    onClick={handlePlay}
                />
                <FontAwesomeIcon
                    onClick={() => handleSkip(forward)}
                    className='skipForward'
                    icon={faAngleRight}
                />
                <FontAwesomeIcon
                    onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                    className='volume'
                    icon={faVolumeLow}
                />
                <input
                    type='range'
                    min='1'
                    max='100'
                    value='50'
                    className='volumeSlider'
                    style={{ display: showVolumeSlider ? 'block' : 'none' }}
                />
            </div>
        </div>
    );
}

export default Player;
