import { useEffect, useState } from 'react';
import './Player2.css';
function Player2({level}){
    const initialPlayer2 = {x: 42.5, speedx: level};
    const [currentPosition, setCurrentPosition] = useState(initialPlayer2);

    useEffect(() => {
        const moveCPU = () => {
            if(document.getElementById('Ball').offsetLeft < document.getElementById('Player2').offsetLeft){
                setCurrentPosition(prevPosition => (
                    {
                    ...prevPosition, x: prevPosition.x > 2 ? prevPosition.x - initialPlayer2.speedx : prevPosition.x
                }));
            }
            if(document.getElementById('Ball').offsetLeft + document.getElementById('Ball').offsetWidth > document.getElementById('Player2').offsetLeft + document.getElementById('Player2').offsetWidth){
                setCurrentPosition(prevPosition => ({
                    ...prevPosition, x: prevPosition.x < 84 ? prevPosition.x + initialPlayer2.speedx : prevPosition.x
                }));
            }
        };

        const intervalId = setInterval(moveCPU, 0.0001); 

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return(
        <div id='Player2' className='Player2' style={{left: currentPosition.x + 'vw'}}></div>
    )
}

export default Player2;