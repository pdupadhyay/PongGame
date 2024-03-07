import { useEffect, useState } from 'react';
import './Player2.css';
function Player2(){
    const initialPlayer1 = {x: 42.5, speedx: 1};
    const [currentPosition, setCurrentPosition] = useState(initialPlayer1);

    useEffect(() => {
        const moveCPU = () => {
            if(document.getElementById('Ball').offsetLeft < document.getElementById('Player2').offsetLeft){
                setCurrentPosition(prevPosition => (
                    {
                    ...prevPosition, x: prevPosition.x > 2 ? prevPosition.x - 2 : prevPosition.x
                }));
            }
            if(document.getElementById('Ball').offsetLeft + document.getElementById('Ball').offsetWidth > document.getElementById('Player2').offsetLeft + document.getElementById('Player2').offsetWidth){
                setCurrentPosition(prevPosition => ({
                    ...prevPosition, x: prevPosition.x < 84 ? prevPosition.x + 2 : prevPosition.x
                }));
            }
        };

        const intervalId = setInterval(moveCPU, 50); 

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return(
        <div id='Player2' className='Player2' style={{left: currentPosition.x + 'vw'}}></div>
    )
}

export default Player2;