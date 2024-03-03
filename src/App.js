import React from 'react';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';

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
