// Lecture 17JULY2025


import React, { useState } from "react";

const ChangeBG = () => {

const colors = ["lightblue","lightgreen","lightcoral"]
const [index,setIndex] = useState(0)
const changeColor = () => {
     setIndex((prev)=>(prev+1) % colors.length)
}
  return (
    <div>
      <div style={{ backgroundColor:colors[index], padding:30}}></div>
      <button onClick={changeColor}> Change Bg </button> 
    </div>

  );
};

export default ChangeBG;
