import React, { useEffect, useState } from "react";
import "./stopwatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => {
        setTime(time + 1);
      }, 10);
    }
    return () => clearInterval(intervalID);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliSeconds = time % 100;

  const startAndStop = () => {
    setisRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliSeconds.toString().padStart(2, "0")}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
