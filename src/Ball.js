import { useEffect, useState } from 'react';
import './Ball.css';

function Ball({playing, changeScore}) {
    const initialBall = {x: 50, y: 50, speedx: 0.2, speedy: 0.2};
    const [ball, setBall] = useState(initialBall);
    useEffect(() => {
        if (playing) {
            const ballMovement = () => {
                setBall((prevBall) => ({
                    ...prevBall,
                    x: prevBall.x - prevBall.speedx,
                    y: prevBall.y + prevBall.speedy,
                }));
            };

            if (ball.x < 2){
                changeScore(score => ({...score, player1: score.player1+1, player2: score.player2}));
                setBall(initialBall);
            }
            if (ball.x > 96) {
                changeScore(score => ({...score, player1: score.player1, player2: score.player2+1}));
                setBall(initialBall);
            }

            if (ball.y < 0.1 || ball.y >= 98) {
                ball.speedy = -ball.speedy;
            }
            
            if(((document.getElementById('Ball').offsetTop+document.getElementById('Ball').offsetHeight >= document.getElementById('Player1').offsetTop)  &&
                (document.getElementById('Ball').offsetLeft+document.getElementById('Ball').offsetWidth >= document.getElementById('Player1').offsetLeft) && 
                (document.getElementById('Ball').offsetLeft <= document.getElementById('Player1').offsetLeft+document.getElementById('Player1').offsetWidth)) 
                ||
                ((document.getElementById('Ball').offsetTop <= document.getElementById('Player2').offsetTop+document.getElementById('Player2').offsetHeight)  &&
                (document.getElementById('Ball').offsetLeft+document.getElementById('Ball').offsetWidth >= document.getElementById('Player2').offsetLeft) && 
                (document.getElementById('Ball').offsetLeft <= document.getElementById('Player2').offsetLeft+document.getElementById('Player2').offsetWidth)))
                {
                    ball.speedx = -ball.speedx;
                    ball.speedx > 0 ? ball.speedx += 0.01 : ball.speedx -= 0.01
                    ball.speedy > 0 ? ball.speedy += 0.01 : ball.speedy -= 0.01
                }
                

        const intervalId = setInterval(ballMovement, 2);
        return () => {
            clearInterval(intervalId);
        };
    }
    }, [ball, changeScore, initialBall, playing]);

    return (
        <>
            <div id='Ball' className='Ball' style={{top: ball.x+'vh', left: ball.y +'vw'}}>
            </div>
        </>
    );
}

export default Ball;