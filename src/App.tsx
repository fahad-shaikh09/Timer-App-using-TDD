import React from 'react';
import './App.css';

function App() {
  
  const playFunc:any = () => {
    console.log("playFunc is Clicked")
  }
  
  const stopFunc:any = () => {
      console.log("stopFunc is Clicked")

  }
  
  const resetFunc:any = () => {
    console.log("resetFunc is Clicked")

  }
  
  return (
    <div className="App">
      <h1>Timer App using TS and TDD</h1>
        <div className="container">
          <span>0</span> 
          <span>:</span>
          <span>0</span> 
          <span>:</span>
          <span>0</span> 
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
