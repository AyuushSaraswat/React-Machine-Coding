import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const btns = [
    "7",
    "8",
    "9",
    "/",
    "5",
    "6",
    "7",
    "*",
    "0",
    "1",
    "2",
    "3",
    "+",
    "-",
    ".",
    "=",
    "c",
  ];

  const handlebtn = (btn) => {
    if (btn === "=") {
      setInput(eval(input).toString());
    } else if (btn === "c") {
      setInput("");
    } else {
      setInput((prev) => prev + btn);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input type="text" readOnly value={input} />
      </div>
      <div>
        {btns.map((btn) => {
          return <div onClick={() => handlebtn(btn)}>{btn}</div>;
        })}
      </div>
    </div>
  );
};

export default Calculator;
