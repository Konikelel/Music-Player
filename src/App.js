import React from 'react';
import Library from './Components/Library';
import Nav from './Components/Nav';
import Player from './Components/Player';
import Song from './Components/Song';
import './Styles/App.scss';

function App() {
    return (
        <div className='app'>
            <Library />
            <Nav />
            <Song />
            <Player />
        </div>
    );
}

export default App;
