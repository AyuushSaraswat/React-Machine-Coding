import React, { useState, useMemo, useCallback } from "react";
import Child2 from "./Components/Child2";



function UseCallback() {
  
  console.log("Parent render");

  const [count, setCount] = useState(0);

  const abc = useCallback(() => {
    console.log("Callback function called");
  },[]);   // dont forget to pass dependency

  return (
    <div>
      {console.log("JSX Render")}
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br /> <br />
      {/*Child only re-renders if props change */}
      <Child2 hitFunction={abc} />
    </div>
  );
}

export default UseCallback;
