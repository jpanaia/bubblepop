import React from "react"
import useGame from './hooks/useGame'

function Stage(props) {
    const {
            count, 
            startGame, 
            isGameRunning, 
            timeRemaining, 
            allBubbles, 
            startTime
        } = useGame(20, 100)

    return (
        <div>
           <header>
                <h2 className="score">Score: {count}</h2> 
                <button onClick={startGame} disabled={isGameRunning} className="start button">Start</button>
                <h2 className="timer">Timer: {timeRemaining}</h2>
            </header>
            <div id="stage">
                {(timeRemaining === 0) ?  
                    <div>  
                        <h3>You popped</h3> 
                        <h4>{count}</h4> 
                        <h3>bubbles in {startTime} seconds!</h3>
                    </div>
                : "" }
                {allBubbles}
            </div>
        </div>
    )
}

export default Stage