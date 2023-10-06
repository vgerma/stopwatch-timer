import React, { useState, useEffect } from "react";

export default function Timer(){
    const [isStarted, setIsStarted] = useState(false)
    const [[hour, min, sec], setTime] = useState([0, 0, 0])
    const h = <input
        type="number"
        name = "h"
        className="input"
        value={hour}
        min="0"
        onChange={(event) => !isStarted && setTime([event.target.value, min, sec]) }
        />

    const m = <input
        type="number"
        name = "m"
        className="input"
        value={min}
        min="0"
        max="60"
        onChange={(event) => !isStarted && setTime([hour, event.target.value, sec])}
        />
   

    const s = <input
        type="number"
        name = "s"
        className="input"
        value={sec}
        min="0"
        max="60"
        onChange={(event) => !isStarted && setTime([hour, min, event.target.value])}
        />
    

    useEffect(()=>{
        const timer = setInterval(()=> onStart(), 1000)
        return ()=> clearInterval(timer)
    })
    
    function onStart(){
        if(!isStarted) return 
        if(hour === 0 && min === 0 && sec === 0){
            setIsStarted(false)
            return
        }
        if(min === 0 && sec === 0){
            setTime([hour - 1, 59, 59])
        }else if(sec === 0){
            setTime([hour, min - 1, 59])
        }else{
            setTime([hour, min, sec - 1])
        }
    }
    function handleReset(){
        setTime([0, 0, 0])
        setIsStarted(false)
    }
    return(
        <div>
            <div className="timer-input">
                {h}h{m}m{s}s
            </div>
            <div className="btn-group">
                <button onClick={handleReset} className="btn-control" disabled={isStarted}>Reset</button>
                {isStarted ?
                    <button onClick={()=>setIsStarted(false)} className="btn-control"  disabled = {hour===0&& min ===0 && sec === 0}>Pause</button> :
                    <button onClick={() => setIsStarted(true)} className="btn-control" disabled = {hour===0&& min ===0 && sec === 0}>Start</button>
                }
            </div>
            

        </div>
    )
}