import React from "react";

function Child2({ name, hitFunction }) {
    
  console.log("Child rendered");

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={hitFunction}>Call Parent Function</button>
    </div>
  );
}

export default React.memo(Child2);