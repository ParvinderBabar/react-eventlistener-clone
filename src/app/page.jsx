"use client"

import { useState } from "react";
import Square from "@/components/Square.jsx";
import Mirror from "@/components/Mirror.jsx";

export default function Home() {
  const [isToggle, setIsToggle] = useState(true);
  const [divColor, setDivColor] = useState("white");

  const [text, setText] = useState("");
  const [count, setCount] = useState("0");

  function changeColor() {
    if (isToggle) {
      setDivColor("blue");    
    }
    else {
      setDivColor("white");
    }
    setIsToggle(!isToggle);  
  }
  function textDisplay(e) {
    e.preventDefault();
    setText(e.target.value);
    console.log(e.target.value);
  }
  function handleCounter() {
    setCount(count + 1);
    
  }
  function Counterdec() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Day10</h1>
      <hr />
      <h1>Toggle the box</h1>
      <Square divColor1={divColor}  onClick={changeColor} />
      <hr></hr>
      {/* <h1>Mirror</h1>
      <input type="text" onChange={textDisplay} ></input><br>
      </br> */}
      <label>{ text}</label>
      <h1>Mirror</h1>
      <Mirror textdisp={text} onChange={textDisplay} />
      <hr />
      
        <h1>Counter</h1>
      <button onClick={Counterdec}>-</button>
      <label>{count}</label>
      <button onClick={handleCounter}>+</button>
       <hr>
      </hr>
      <h1>Car Race</h1>
    </div>
   
  );
}