import React, { useState } from "react";
import "./Watch.css";
let adjustInterval = undefined;
const Watch = () => {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const Startwatch = () => {
    adjustInterval = setInterval(() => {
      setTime((x) => x + 1);
      setStarted(true);
    }, 1000);
  };
  const Stopwatch = () => {
    clearInterval(adjustInterval);
  };
  const Resetwatch = () => {
    setTime(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };

  return (
    <div className="App">
      <h1>Let's Start Stop Watch</h1>
      <h1>{time}</h1>
      <button disabled={started} className="start" onClick={Startwatch}>
        Start
      </button>
      <button className="stop" onClick={Stopwatch}>
        Stop
      </button>
      <button className="reset" onClick={Resetwatch}>
        Reset
      </button>
    </div>
  );
};

export default Watch;
