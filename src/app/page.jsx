"use client"

import { useState } from "react";
import Square from "@/components/Square.jsx";

export default function Home() {
  const [isToggle, setIsToggle] = useState(true);
  const [divColor, setDivColor] = useState("white");

  const [text, setText] = useState("");

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

  return (
    <div>
      <h1>Day10</h1>
      <hr />
      <h1>Toggle the box</h1>
      <Square divColor1={divColor}  onClick={changeColor} />
      <hr></hr>
      <h1>Mirror</h1>
      <input type="text" onChange={textDisplay} ></input><br>
      </br>
      <label>{ text}</label>
    </div>
  );
}