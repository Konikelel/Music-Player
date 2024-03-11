import React from 'react';
import Nav from './Components/Nav';
import Player from './Components/Player';
import Song from './Components/Song';
import './Styles/App.scss';

function App() {
    return (
        <div className='app'>
            <Nav />
            <Song />
            <Player />
        </div>
    );
}

export default App;
