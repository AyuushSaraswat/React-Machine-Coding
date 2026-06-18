import { useState } from "react";
import "./App.css";

function UseState2() {

  let [count, setCount] = useState(0);
  console.log("Component render");

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // React Create Same Bundle for all of them
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
    </>
  );
}

export default UseState2;

// All three setCount(count + 1) calls are using the same stale value of count (from the current render), not the updated one.
// So if count is 0, all three lines are essentially doing:

//  React does not immediately update the state.
//  Instead, it schedules the update and batches multiple updates together for performance.

// When you use the current state value (count) directly like setCount(count + 1),
//  you're using the same snapshot of state for all three calls.

// setCount(1);
// setCount(1);
// setCount(1);


//------------------------------------------------------------------------------------------

// FIX:---

// import { useState } from "react";
// import "./App.css";

// function UseState2() {

//   console.log("Component render");
//   let [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prev) => {
//       console.log("previous", prev);
//       return prev + 1;
//     });
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increase</button>
//     </>
//   );
// }

// export default UseState2;
