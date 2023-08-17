"use client";

import { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const pauseRef = useRef(0);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);

    console.log(pauseRef.current);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    if (startTime != null && now != null) {
      pauseRef.current = pauseRef.current + (now - startTime) / 1000;
    }
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = pauseRef.current + (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
