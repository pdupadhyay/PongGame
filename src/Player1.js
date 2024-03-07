import React, { useEffect, useState } from 'react';
import './Player1.css';

function Player1(){
    const initialPlayer1 = {x: 42.5, speedx: 1};
    const [currentPosition, setCurrentPosition] = useState(initialPlayer1);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key === 'ArrowLeft'){
                setCurrentPosition(prevPosition => (
                    {
                    ...prevPosition, x: prevPosition.x > 2 ? prevPosition.x - 2 : prevPosition.x
                }));
            }
            if(event.key === 'ArrowRight'){
                setCurrentPosition(prevPosition => ({
                    ...prevPosition, x: prevPosition.x < 84 ? prevPosition.x + 2 : prevPosition.x
                }));
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return(
        <div id='Player1' className='Player1' style={{left: currentPosition.x + 'vw'}}></div>
    )
}

export default Player1;