import React, { useEffect, useState } from "react";
import Profile3 from "./Components/Profile3";

const UseEffect2 = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  console.log("Component Render");

 useEffect(()=>{
  console.log("Hello from useEffect")
  const fetchUsers = async()=> {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data.slice(0,5))
  }
  fetchUsers()
 },[])

  return (
    <div>
      {console.log("Hello from jsx")}
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {users.map((user) => (
        <div key={user.id}>
          <Profile3
            name={user.name}
            email={user.email}
            website={user.website}
          />
        </div>
      ))}
    </div>
  );
};

export default UseEffect2;








// Phase 1: Initial Render (Render Phase)
// console.log("Component Render");
// 👉  fRuns when React calls your component function
// {console.log("Hellorom jsx")}
// 👉 Runs while JSX is being evaluated
// Output so far:
// Component Render
// Hello from jsx
// At this point:
// users = []
// So .map() runs on empty array → nothing rendered

// Phase 2: Commit Phase + useEffect
// useEffect(() => {
//   console.log("Hello from useEffect");
// 👉 Runs after DOM is painted
// Output:
// Hello from useEffect
// Then:
// fetch(...)
//   .then(res => res.json())
//   .then(result => setUsers(...))
// 👉 Async work starts (does NOT block UI)

// Phase 3: State Update → Re-render
// When this runs:
// setUsers(result.slice(0,10));
// 👉 React schedules a re-render

// 🔄 Phase 4: Second Render
// Again your component runs:
// Component Render
// Hello from jsx
// But now:
// users has 10 items
// So this runs:
// users.map(...)

// 👶 Phase 5: Child Components Render
// Each Profile3 runs:
// console.log("Hello from profile3");
// 👉 Runs 10 times
