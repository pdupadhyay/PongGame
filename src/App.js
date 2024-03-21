import { useEffect, useState } from 'react';
import './App.css';
import Ball from './Ball';
import Player1 from './Player1';
import Player2 from './Player2';

function App() {

  const [playing, setPlaying] = useState(false);
  const [levelChosen, setLevelChosen] = useState(false);
  const [score, setScore] = useState({player1: 0, player2: 0});
  const [level, setLevel] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const changeScore = (score) => {
    setScore(score);
  } 

  useEffect(() => {
    if (score.player1 === 10 || score.player2 === 10) {
      setPlaying(false);
      setLevelChosen(false);
      setGameOver(true);
    }
  }, [score, gameOver]);

  const startGame = (l) => {
    setPlaying(true);
    setLevel(l);
  }

  return (
    <div className="App">
      <div className='Game-Screen'>
        {levelChosen ? (
          <>
            {playing ? (
            <>
              <Ball playing={playing} changeScore={changeScore}></Ball>
              <Player1></Player1>
              <Player2 level={level}></Player2>
              <div className='Score'>
                <div>
                  {score.player1}
                </div>
                :
                <div>
                  {score.player2}
                </div>
              </div>
              <div className='Midline'></div>
            </>
            ) : (
            <div className='Level-Selection'>
              <span className='Level-Span'>Choose your level:</span>
              <div className='Button-Container'>
                <button className='levels' onClick={() =>startGame(0.2)}>Easy</button>
                <button className='levels' onClick={() =>startGame(0.3)}>Medium</button>
                <button className='levels' onClick={() =>startGame(0.4)}>Hard</button>
              </div>
            </div>)}
          </>
        ) : (
          <>
            {gameOver ? 
            (<>
              <div className='GameOver'>
                {score.player1 === 10 ? <div className='Winner'>Player 1 Wins</div> : <div className='Winner'>CPU Wins</div>}
              </div>
              <div className='Start-Button' onClick={() => setLevelChosen(true)}><span>Restart</span></div>
            </> ) : <div className='Start-Button' onClick={() => setLevelChosen(true)}><span>Start</span></div>}
              (<>
                {() => setScore({player1: 0, player2: 0})}
                <h1 className='Title'>Pong Game</h1>
              </>)
          </>
        )}
      </div>
    </div>
  );
}

export default App;
