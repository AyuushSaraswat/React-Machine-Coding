import React, { useRef, useState } from "react";

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  const formatTime = () => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(Math.floor(time % 60)).padStart(2, "0");

    return `${hrs} ${mins} ${secs}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stopwatch </h1>
      <h2>{formatTime()}</h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;





