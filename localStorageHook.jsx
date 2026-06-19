import React from "react";
import { useState } from "react";

export function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
      
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;

  });

  const setStoredValue = (newValue) => {

    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    
  };
  return [value, setStoredValue];
}

function App() {
  const [name, setName] = useLocalStorage("name", "Guest");

  return (
    <div>
      <h1>Local Storage Custom Hook</h1>
      <h2>Hello - {name}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
