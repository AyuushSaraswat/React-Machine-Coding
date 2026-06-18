import React, { useEffect, useState } from "react";

function useDebounce(value, delay) {

  const [debouncevalue, setDebouncevalue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncevalue(value);
    }, delay);

    return () => clearTimeout(timer);

  }, [delay, value]);

  return debouncevalue;
  
}

const Debounce = () => {

  const [input, setInput] = useState("");
  const Debounce = useDebounce(input, 3000);

  useEffect(() => {
    if (Debounce) {
      console.log("API Called",Debounce);
    }
  }, [Debounce]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Debounce;
