import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Nav({ showLibrary, setShowLibrary }) {
    return (
        <div className='nav'>
            <nav>
                <h1 className='title'>Waves</h1>
                <button
                    className='button'
                    onClick={() => setShowLibrary(!showLibrary)}
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
