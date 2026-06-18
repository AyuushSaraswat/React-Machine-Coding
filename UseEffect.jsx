import { useEffect, useState } from "react";

const UseEffect = () => {

  const [count, setCount] = useState(0);

  console.log("Component Render");

  useEffect(() => {
    console.log("useEffect run on every render");
  }); // No dependency array

  return (
    <div>
      {console.log("JSX render")}

      <h1>No dependency array</h1>

      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default UseEffect;




// 👉 Final takeaway
// Your understanding is almost correct:
// Yes, useEffect runs after render (commit phase)
// Yes, logs confirm that order




// -------------------------------------------X----------------------------------------------



// // CASE 2: Empty array ( ComponentdidMount )




// import React, { useEffect, useState } from "react";

// const UseEffect = () => {

//   const [count, setCount] = useState(0);
//   console.log("Component Render");

//   useEffect(()=>{
//     console.log("useEffect run once")
//   },[])     // Empty array : ComponentdidMount in class component

//   return (
//     <div>
//       {console.log("JSX render")}
//       <h1>Empty dependecy array</h1>
//       <h2>Count : {count} </h2>
//       <button onClick={()=>setCount(count+1)}>Increase</button>
//     </div>
//   );
// };

// export default UseEffect;



// -------------------------------------------X----------------------------------------------





// import React, { useEffect, useState } from "react";

// const UseEffect = () => {

//   const [count, setCount] = useState(0);
//   const [dec, setDec] = useState(100);

//   console.log("Component Mount");
//   useEffect(() => {
//     console.log("useEffect run on increase count dependency");
//   }, [count]);   // with depenccy === componentdidUpdate 

//   return (
//     <div>
//       {console.log("Html render")}
//       <h1>With dependecy array</h1>
//       <h2>Count : {count} </h2>
//       <h2>Decrease : {dec} </h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setDec(dec - 1)}>Decrease</button>
//     </div>
//   );
// };

// export default UseEffect;

