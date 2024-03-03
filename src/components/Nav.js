import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Nav() {
    return (
        <div className='nav'>
            <nav>
                <h1 className='title'>Waves</h1>
                <button className='button'>
                    <p>Library</p>
                    <FontAwesomeIcon className='music' icon={faMusic} />
                </button>
            </nav>
        </div>
    );
}

export default Nav;
