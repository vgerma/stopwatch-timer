import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import './App.css';
import { useState } from 'react';

function App() {
  const [isStopwatch, setIsStopwatch] = useState(true)
  const styles = {fontSize:"32px", color:"black"}
  return (
    <div className="App">
      <div className='header'>
        <button
          style={isStopwatch? styles:{}}
          onClick={()=>setIsStopwatch(true)}  
          className='btn-comp'>
            Stopwatch
        </button>
        <button
          style = {!isStopwatch ? styles : {}}
          onClick={()=>setIsStopwatch(false)}
          className='btn-comp'>
            Timer
        </button>
      </div>
      <div>
        {isStopwatch?<Stopwatch />:<Timer />}
      </div>
    </div>
  );
}

export default App;
