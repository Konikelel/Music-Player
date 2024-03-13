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
    const sliderVolumeFillRef = useRef();
    const sliderSongFillRef = useRef();
    const dispatch = useDispatch();
    const isPlaying = useSelector(selectIsPlaying);
    const currentSong = useSelector(selectCurrent);

    const [volume, setVolume] = useState(0.5);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const [timeData, setTimeData] = useState({ current: 0, end: 0 });

    useEffect(() => {
        if (isPlaying) audioRef.current.play();
    }, [currentSong]);

    return (
        <div className='player'>
            <audio
                ref={audioRef}
                src={currentSong.audio}
                onLoadedMetadata={(e) => {
                    setTimeData({
                        end: e.target.duration,
                        current: e.target.currentTime,
                    });
                    sliderSongFillRef.current.style.width = '100%';
                }}
                onTimeUpdate={(e) => {
                    setTimeData({
                        ...timeData,
                        current: e.target.currentTime,
                    });
                    sliderSongFillRef.current.style.width = `${
                        (1 - e.target.currentTime / timeData.end) * 100
                    }%`;
                }}
                onEnded={() => dispatch(forward())}
            />
            <div className='timeControl'>
                <p className='timeStart'>{timeFormatter(timeData.current)}</p>
                <div className='inputContainer'>
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
                    <div className='fill' ref={sliderSongFillRef} />
                </div>

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
                <div
                    className='inputContainer'
                    style={{ display: showVolumeSlider ? 'block' : 'none' }}
                >
                    <input
                        type='range'
                        min='0'
                        max='1'
                        step='0.01'
                        value={volume}
                        className='volumeSlider'
                        onChange={(e) => {
                            const volume = e.target.value;
                            setVolume(volume);
                            audioRef.current.volume = volume;
                            sliderVolumeFillRef.current.style.width = `${
                                volume * 100
                            }%`;
                        }}
                    />
                    <div className='fill' ref={sliderVolumeFillRef} />
                </div>
            </div>
        </div>
    );
}

export default Player;
