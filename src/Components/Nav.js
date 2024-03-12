import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeShowLibrary } from '../Store/ControlsSlice';

function Nav() {
    const dispatch = useDispatch();

    return (
        <div className='nav'>
            <nav>
                <h1 className='title'>Waves</h1>
                <button
                    className='button'
                    onClick={() => dispatch(changeShowLibrary())}
                >
                    <div className='buttonContainer'>
                        <p>Library</p>
                        <FontAwesomeIcon className='music' icon={faMusic} />
                    </div>
                </button>
            </nav>
        </div>
    );
}

export default Nav;
