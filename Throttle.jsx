import React, { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {

  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }, delay - (now - lastExecuted.current));

      return () => clearTimeout(timer);
    }
  }, [value, delay]);

  return throttledValue;
};

const Throttle = () => {

  const [input, setInput] = useState("");
  const throttledInput = useThrottle(input, 2000);

  useEffect(() => {
    if (throttledInput) {
      console.log("API CALLED:", throttledInput);
    }
  }, [throttledInput]);

  return (
    <div style={{textAlign:"center"}}>
      <h2>Throttle Example</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />

       <br /><br />
      <h3><strong>Input:</strong> {input}</h3>
      <h3><strong>Throttled:</strong> {throttledInput}</h3>
    </div>
  );
};

export default Throttle;






