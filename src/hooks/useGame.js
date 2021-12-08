import {useState, useEffect} from "react"
import Bubble from "../Bubble"

function useGame(startTime = 10, bubbleCount = 30) {
    const [count, setCount] = useState(0)  
    const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [isGameRunning, setIsGameRunning] = useState(false)
    const [bubblesList, setBubblesList] = useState([])

    function startGame() {
        console.log("starting game...")
        setIsGameRunning(true)
        setCount(0)
        setTimeRemaining(startTime)
        createBubbles()
    }

    function createBubbles() {
       console.log('creating bubbles...')
        
        for (let i = 0; i < bubbleCount; i++) {
            let randomSize = Math.floor(Math.random() * 400) + 20
            let randomPositionX = Math.floor(Math.random() * 400) + 1
           // console.log(randomPositionX)
            let randomPositionY = Math.floor(Math.random() * 500) + 1
            //console.log(randomPositionY)
            //let randomTime = Math.random() * 10 + 1
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            let bubbleBackgroundColor = "#" + randomColor
            
            let newBubble = {   
                key: i,
                id: i,
                backgroundColor: bubbleBackgroundColor,
                width: randomSize,
                height: randomSize,
                top: randomPositionX,
                left: randomPositionY,
                pop: popBubble
            } 
            //console.log(newBubble)
           
            setBubblesList(bubble => [...bubble, newBubble]) 

            // still working on this.. not passing random animation times yet
            // const bubbleEls = document.querySelectorAll('.bubble')
           
            // bubbleEls.forEach(function(bubbleEl) {
            //     bubbleEl.style.setProperty('--animation-time-x', randomTime +'s')
            //     bubbleEl.style.setProperty('--animation-time-y', randomTime +'s')
            //     console.log(bubbleEl) 
            //   });
        }
    }

    function endGame() {
       setIsGameRunning(false)
       setBubblesList([])
    }

    useEffect(() => {
        if(isGameRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1) 
            }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isGameRunning])
 
    function popBubble(e) {
        // class name will be .bubble- number of bubble sequentially
        const classNameToPop = e.target.classList[1]
        const bubbleEl = document.querySelector(`.${classNameToPop}`)
        bubbleEl.classList.add('hide')
        // increase score
        setCount(prevCount => prevCount + 1)
        //('popped!')
    }

    const allBubbles = bubblesList.map(bubble => <Bubble {...bubble}/>) 

    return {count, startGame, isGameRunning, timeRemaining, allBubbles, startTime} 
}

export default useGame