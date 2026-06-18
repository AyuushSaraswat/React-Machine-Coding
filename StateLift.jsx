import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const StateLift = () => {
  
  const [input, setInput] = useState("");

  return (
    <div>
      {/* <UseState/> */}
      <ChildA input={input} setInput={setInput} />
      <hr />
      <ChildB input={input} />
    </div>
  );
};

export default StateLift;



//             ┌──────────────┐
//             │     App      │
//             │ (Parent)     │
//             │              │
//             │ input state  │
//             └──────┬───────┘
//                    │
//          ┌─────────┴─────────┐
//          │                   │
//          ▼                   ▼
//  ┌──────────────┐     ┌──────────────┐
//  │   Child A    │     │   Child B    │
//  │              │     │              │
//  │  Input box   │     │  Show input  │
//  │              │     │              │
//  └──────┬───────┘     └──────────────┘
//         │
//         │ User types
//         ▼
//  setInput() updates state in App
//         │
//         ▼
//  App re-renders → new input sent to ChildB
