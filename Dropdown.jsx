import React, { useState } from "react";

const Dropdown = () => {
  const [fruit, setFruit] = useState("apple");
  return (
    <div>
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="mango">Mango</option>
      </select>
      <p>Selected:{fruit} </p>
    </div>
  );
};

export default Dropdown;
