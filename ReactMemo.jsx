import React, { useState } from "react";

function Child({ name }) {
  console.log(`Child rendered: ${name}`);
  return <h1>{name}</h1>;
}



 function Reactmemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {/* Props never change */}
      <Child name="Ayush" />
    </div>
  );
}
export default Reactmemo;



// -----------------------------X---------------------------------


// React.memo → Caches a (component’s rendered output),re-rendering only if props change




// import React, { memo, useState } from "react";
// import Child from "./Components/Child";


// function Reactmemo() {

//    const [count, setCount] = useState(0);
//    const [name, setName] = useState("Ayush");

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//        <button onClick={() => setName("Mehul")}>Change Name</button>
//       {/*Child doesnt call untill a prop is changed*/}
//       <Child name={name} />
//     </div>
//   );
// }

// export default Reactmemo;
