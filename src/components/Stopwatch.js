import React from "react";
import { useState, useEffect } from "react";

export default function Stopwatch(){
    
    const [time, setTime] = useState(0)
    const [isRunning, setisRunning]= useState(false)
    const [isStart, setIsStart] = useState(true)
    const [isPause, setIsPause] = useState(false)
    const [sec, setSec] = useState(0)
     
    useEffect(()=>{
        let timer = isRunning && setInterval(()=>setTime(prevTime=>prevTime + 1), 10)
        
        return ()=>clearInterval(timer)
    }, [isRunning])
    if(time>=100){
        setSec(prev => prev + 1)
        setTime(0)
    }
    let [min, setMin] = useState(0)
    if(sec>=60){
        setMin(prev => prev + 1)
        setSec(0)
    }
    function handleStart(){
        setisRunning(true)
        setIsStart(false)
    }
    function handleReset(){
        if(!isPause)return
        setIsStart(true)
        setTime(0)
        setSec(0)
        setMin(0)
        setIsPause(false)
    }
    function handlePause(){
        if(!isRunning)return
        setisRunning(false)
        setIsPause(true)
    }
    return(
        <div>
            <div className="stopwatch gradient-border">
                {min<10 && "0"}{min}:{sec<10&&"0"}{sec}:{time<10 && "0"}{time}
            </div>
            {isStart ? <button onClick={handleStart} className="btn-control">Start</button> : <button className="btn-control" onClick={handleReset}>Reset</button>}
            <button onClick={handlePause} className="btn-control">Pause</button>
        </div>
    )
}