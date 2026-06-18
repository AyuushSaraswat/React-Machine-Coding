import React, { useState } from "react";

const ChildA = ({input,setInput}) => {
  
  return (
    <div>
      <h2>Child A component</h2>
      <input
        type="text"
        placeholder="Enter your Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default ChildA;
