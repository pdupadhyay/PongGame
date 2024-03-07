import { useEffect, useState } from 'react';
import './Ball.css';

function Ball(playing) {
    const initialBall = {x: 50, y: 50, speedx: 1, speedy: 1};
    const [ball, setBall] = useState(initialBall);
    const [gameOver, setGameOver] = useState(false);
    useEffect(() => {
        if (playing.playing && !gameOver) {
            const ballMovement = () => {
                setBall((prevBall) => ({
                    ...prevBall,
                    x: prevBall.x + prevBall.speedx,
                    y: prevBall.y + prevBall.speedy,
                }));
            };

            if (ball.x < 2 || ball.x > 96) {
                setGameOver(true);
            }
            if (ball.y < 0.1 || ball.y >= 98) {
                ball.speedy = -ball.speedy;
            }
            
            if(((document.getElementById('Ball').offsetTop+document.getElementById('Ball').offsetHeight === document.getElementById('Player1').offsetTop)  &&
                (document.getElementById('Ball').offsetLeft+document.getElementById('Ball').offsetWidth >= document.getElementById('Player1').offsetLeft) && 
                (document.getElementById('Ball').offsetLeft <= document.getElementById('Player1').offsetLeft+document.getElementById('Player1').offsetWidth)) 
                ||
                ((document.getElementById('Ball').offsetTop === document.getElementById('Player2').offsetTop+document.getElementById('Player2').offsetHeight)  &&
                (document.getElementById('Ball').offsetLeft+document.getElementById('Ball').offsetWidth >= document.getElementById('Player2').offsetLeft) && 
                (document.getElementById('Ball').offsetLeft <= document.getElementById('Player2').offsetLeft+document.getElementById('Player2').offsetWidth)))
                {
                    ball.speedx = -ball.speedx;
                }
                

        const intervalId = setInterval(ballMovement, 50);
 
        return () => {
            clearInterval(intervalId);
        };
    }
    }, [ball, playing.playing, gameOver]);

    return (
        <>
            {gameOver && <div className='GameOver'>Game Over</div>}
            <div id='Ball' className='Ball' style={{top: ball.x+'vh', left: ball.y +'vw'}}>
            </div>
        </>
    );
}

export default Ball;