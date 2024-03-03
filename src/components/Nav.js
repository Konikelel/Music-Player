import React from 'react';
import '../styles/_nav.scss';

function Nav() {
    return (
        <div className='nav'>
            <nav>
                <h1 className='title'>Waves</h1>
                <button className='button'>
                    <p>Library</p>
                </button>
            </nav>
        </div>
    );
}

export default Nav;
