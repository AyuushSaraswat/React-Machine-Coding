// USESTATE HOOK
import { useState } from "react";
import Profile from "./Components/Profile";

function UseState() {

  let [count, setCount] = useState(0);
  let [name, setName] = useState("Ayush");

  console.log("Parent Component render");

  const increment = () => {
    setCount(count + 1);
    console.log("Hello from counter");
  };

  const handleName = () => {
    setName("Mehul");
    console.log("Hello from name");
  };



  return (
    <>
       {console.log("Hello from Parent JSX")}
      <h1>{count}</h1>
      <button onClick={increment}>Increase Count</button>
      <button onClick={handleName}>Change Name</button>
      <Profile userName={name} />
    </>
  );
}

export default UseState;

//--------------------------------------- Initial Render ----------------------------------------------------------

// Step 1:
// UseState component runs for the first time
// → console.log(" Parent Component render") gets printed

// Step 2:
// React reads the JSX and sees <Profile userName={name} />
// → Profile component gets called (default nature of React: child renders when parent renders)

// Step 3:
// Profile component runs
// → console.log("Child Component") gets printed
// → JSX (My name is Ayush) is returned and rendered on screen

//------------------------ When "Increase Count" Button is Clicked-------------------------------------------------------

// Step 4:
// Button click triggers increment function

// Step 5:
// Inside increment:
// → setCount(count + 1) is called (state update is scheduled, not immediate)
// → console.log("Hello from counter") runs immediately

// Step 6:
// React does not re-render immediately
// → It waits until the function execution is complete (batching concept)

// Step 7:
// After increment function completes
// → React starts re-rendering

// Step 8:
// UseState component runs again
// → console.log(" Parent Component render") gets printed again
// → updated count value is used

// Step 9:
// React again sees <Profile userName={name} />
// → Profile component gets called again (even though name didn’t change)

// Step 10:
// Profile component runs again
// → console.log("Child Component") gets printed again
// → JSX is returned again

// Step 11:
// React updates only the changed part in DOM (count value)

// ---------------------------------When "Change Name" Button is Clicked--------------------------------------------

// Step 12:
// Button click triggers handleName function

// Step 13:
// Inside handleName:
// → setName("Mehul") is called (update scheduled)
// → console.log("Hello from name") runs immediately

// Step 14:
// After function completes
// → React re-renders

// Step 15:
// UseState component runs again
// → console.log(" Parent Component render") gets printed

// Step 16:
// Profile component is called again
// → console.log("Child Component") gets printed
// → JSX now shows updated name ("Mehul")

// Important Notes (add this at end)
// setState is not truly asynchronous, but behaves like it because React schedules updates
// React batches state updates for performance
// Entire function component runs again on re-render
// Child components also re-render by default when parent re-renders
// To prevent unnecessary child re-renders → use React.memo



