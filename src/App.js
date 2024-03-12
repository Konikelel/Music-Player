import React, { useState } from 'react';
import Library from './Components/Library';
import Nav from './Components/Nav';
import Player from './Components/Player';
import Song from './Components/Song';
import './Styles/App.scss';

function App() {
    const [showLibrary, setShowLibrary] = useState(false);
    return (
        <div className='app'>
            <Library
                showLibrary={showLibrary}
                setShowLibrary={setShowLibrary}
            />
            <Nav showLibrary={showLibrary} setShowLibrary={setShowLibrary} />
            <Song />
            <Player />
        </div>
    );
}

export default App;
