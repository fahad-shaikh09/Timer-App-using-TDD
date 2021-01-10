import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [interval, SetInterval] = useState<number>(0)
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

  function calculateTime(secs: number): (Array<number | string>) {
    var hours: number = Math.floor(secs / 3600);
    var minutes: number = Math.floor((secs - (hours * 3600)) / 60);
    var seconds: number = secs - (hours * 3600) - (minutes * 60);
    return [
      hours < 10 ? `0${hours}` : hours,
      minutes < 10 ? `0${minutes}` : minutes,
      seconds < 10 ? `0${seconds}` : seconds]
    }

    useEffect(() => {
      setTimeArray(calculateTime(timeInSeconds));
  }, [timeInSeconds]);

  const playFunc = (e: object) => {
    console.log("playFunc is Clicked");

    const interval:any = setInterval(() => {
      setTimeInSeconds((prev:any) => prev+1);
      },1000);

      SetInterval(interval);
     
    }

  const stopFunc: any = () => {
    console.log("stopFunc is Clicked")
    clearInterval(interval);
  }

  const resetFunc: any = () => {
    console.log("resetFunc is Clicked")
    clearInterval(interval);
    setTimeInSeconds(0);
  }

  return (
    <div className="App">
      <h1>Timer App using TS and TDD</h1>
      <div className="container">
        <span>{timeArray[0]}</span>
        <span>:</span>
        <span>{timeArray[1]}</span>
        <span>:</span>
        <span>{timeArray[2]}</span>
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
