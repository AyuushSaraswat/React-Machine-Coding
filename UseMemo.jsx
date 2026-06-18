// WITHOUT USEMEMO

import React, { useState } from "react";

const UseMemo = () => {

  const [count, setCount] = useState(0);

  const HeavyCalculation = () => {
    console.log("Running Heavy Calculation");
    return 100
  };

  const Result = HeavyCalculation();  // This runs everytime on page render

  return (
    <div>
      { console.log("Html render")}
      <h2>Heavy Calculation Result : {Result}</h2>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemo;




// -------------------------------------------------X------------------------------------------------------------------------




// WITH USEMEMO
// Caches a calculated value of a function, recomputing only when dependencies change.

// import React, { useMemo, useState } from "react"

// const UseMemo = () => {
//   const [count, setCount] = useState(0);

//   const Result = useMemo(() => {
//     console.log("Running Heavy Calculation");
//     return 100;
//   },[]);   //Runs only once saved in cache

  
// // useMemo returns a value, not a function.

//   return (
//     <div>
//       {console.log("JSX render")}
//       <h2>Heavy Calculation Result : {Result}</h2>
//       <h2>Count:{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default UseMemo;









// // --------------------------------------------------------------X-------------------------------------------------------------------------
