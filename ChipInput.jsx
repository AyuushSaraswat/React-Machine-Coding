import { useState } from "react";
import "./styles.css";

export default function ChipInput() {
    
  const [input, setInput] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      setChips([...chips, input]);
      setInput("");
    }
  };

  const removeChip = (index) => {
    setChips(chips.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter text ..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      {chips &&
        chips.map((chip, idx) => (
          <div key={idx}>
            {chip} <span onClick={() => removeChip(idx)}>x</span>
          </div>
        ))}
    </div>
  );
}
