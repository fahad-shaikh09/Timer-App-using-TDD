import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [timerValue, SetTimerValue] = useState<number>(0)
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timeArray, setTimeArray] = useState<Array<number | string>>([]);

  function convertTime(secs: number): (Array<number | string>) {
    var hours: number = Math.floor(secs / 3600);
    var minutes: number = Math.floor((secs - (hours * 3600)) / 60);
    var seconds: number = secs - (hours * 3600) - (minutes * 60);
    return [
      hours < 10 ? `0${hours}` : hours,
      minutes < 10 ? `0${minutes}` : minutes,
      seconds < 10 ? `0${seconds}` : seconds
    ]
  }

  useEffect(() => {
    setTimeArray(convertTime(timeInSeconds));
  }, [timeInSeconds]);

  const playFunc = (e: object) => {
    console.log("playFunc is Clicked");

    const interval: any = setInterval(() => {
      setTimeInSeconds((prev: any) => prev + 1);
    }, 1000);

    SetTimerValue(interval);

  }

  const stopFunc: any = () => {
    console.log("stopFunc is Clicked")
    clearInterval(timerValue);
  }

  const resetFunc: any = () => {
    console.log("resetFunc is Clicked")
    clearInterval(timerValue);
    setTimeInSeconds(0);
  }

  return (
    <div className="App">
      <h1>Timer App using TS and TDD</h1>
      <div className="container">
         <span>{timeArray[0]}</span>        {/*hours */}
        <span>:</span>
        <span>{timeArray[1]}</span>         {/*minss */}  
        <span>:</span>
        <span>{timeArray[2]}</span>         {/*secondss */}
      </div>

      <div className="buttons">
        <button onClick={playFunc}>Play</button>
        <button onClick={stopFunc}>Stop</button>
        <button onClick={resetFunc}>Reset</button>
      </div>

    </div>
  );
}

export default App;
