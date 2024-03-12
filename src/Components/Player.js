import {
    faAngleLeft,
    faAngleRight,
    faPause,
    faPlay,
    faVolumeLow,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsPlaying, selectIsPlaying } from '../Store/ControlsSlice';
import { back, forward, selectCurrent } from '../Store/SongsSlice';

const timeFormatter = (time) =>
    Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);

function Player() {
    const audioRef = useRef();
    const dispatch = useDispatch();
    const isPlaying = useSelector(selectIsPlaying);
    const currentSong = useSelector(selectCurrent);

    const [timeData, setTimeData] = useState({ current: 0, end: 0 });
    const [volume, setVolume] = useState(0.5);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);

    useEffect(() => {
        if (isPlaying) audioRef.current.play();
    }, [currentSong]);

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
                onEnded={() => dispatch(forward())}
            />
            <div className='timeControl'>
                <p className='timeStart'>0:00</p>
                <input
                    type='range'
                    step='0.01'
                    min={0}
                    max={timeData.end}
                    value={timeData.current}
                    className='timeSlider'
                    onChange={(e) => {
                        audioRef.current.currentTime = e.target.value;
                    }}
                    style={{
                        background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
                    }}
                />
                <p className='timeEnd'>{timeFormatter(timeData.end)}</p>
            </div>
            <div className='playControl'>
                <FontAwesomeIcon
                    onClick={() => dispatch(back())}
                    className='skipBack'
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    className='play'
                    icon={isPlaying ? faPause : faPlay}
                    onClick={() => {
                        if (!isPlaying) {
                            audioRef.current.play();
                        } else {
                            audioRef.current.pause();
                        }
                        dispatch(changeIsPlaying());
                    }}
                />
                <FontAwesomeIcon
                    onClick={() => dispatch(forward())}
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
                    min='0'
                    max='1'
                    step='0.01'
                    value={volume}
                    className='volumeSlider'
                    style={{ display: showVolumeSlider ? 'block' : 'none' }}
                    onChange={(e) => {
                        setVolume(e.target.value);
                        audioRef.current.volume = e.target.value;
                    }}
                />
            </div>
        </div>
    );
}

export default Player;
