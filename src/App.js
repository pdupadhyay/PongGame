import { useState } from 'react';
import './App.css';
import Ball from './Ball';
import Player1 from './Player1';
import Player2 from './Player2';

function App() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="App">
      <div className='Game-Screen'>
        {playing ? (
          <>
            <Ball playing={playing}></Ball>
            <Player1></Player1>
            <Player2></Player2>
            <div className='Midline'></div>
          </>
        ) : (
          <>
            <h1 className='Title'>Pong Game</h1>
            <div className='Start-Button' onClick={() => setPlaying(true)}><span>Start</span></div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
