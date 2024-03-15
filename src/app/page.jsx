"use client"

import { useEffect, useState } from "react";
import Square from "@/components/Square.jsx";
import Mirror from "@/components/Mirror.jsx";

export default function Home() {
  const [isToggle, setIsToggle] = useState(true);
  const [divColor, setDivColor] = useState("white");

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [initialTime, setTime] = useState(0);
  const [timeRunning, setTimeRunning] = useState(false);
  

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
  // it allows you to perfomr the sideeffects in function component.side 
  //effects like ddtata fetching,setting up subscriptions or manually chnging dom
  useEffect(() => {
    //function inside useeffect is side effect itself.in this case it set up
    //event lsitener for keydown events on window.
    
    // function gng to handle keydown event
    const handkeydown = (e) => {
      if (e.key === "ArrowRight") {
        setCarPosition(carPosition + 10);
        console.log("right arrow key pressed,carposition",carPosition);
        
      }
      if (e.key === "ArrowLeft") {
        setCarPosition(carPosition - 10);
        console.log("left arrow key pressed");
      }
    }

    window.addEventListener("keydown", handkeydown);
    return () => {
      window.removeEventListener("keydown", handkeydown);
    }//dependency array:
    //carpostion->array of dependencies for effect. the effect will re-run if value change.inthis
    //effect relies on on carposition .
  }, [carPosition]);
  
    useEffect(() => {
    let intervalId;
    if (timeRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId); // Cleanup function to clear the interval
    };
  }, [timeRunning]);

  const startStopwatch = () => {
    setTimeRunning(true);
  };

  const stopStopwatch = () => {
    setTimeRunning(false);
  };

  const clearStopwatch = () => {
    setTime(0);
    setTimeRunning(false);
  };

  return (
    <div>
      <h1>Day10</h1>
      <hr />
      <h1>Toggle the box</h1>
      <Square divColor={divColor}  onClick={changeColor} />
      <hr></hr>
      {/* <h1>Mirror</h1>
      <input type="text" onChange={textDisplay} ></input><br>
      </br> */}
      <label>{ text}</label>
      <h1>Mirror</h1>
      <Mirror onChange={textDisplay} />
      <hr />
      
        <h1>Counter</h1>
      <button onClick={Counterdec}>-</button>
      <label>{count}</label>
      <button onClick={handleCounter}>+</button>
       <hr>
      </hr>
      <h1>Car Race</h1>
      <h6>Move car to the right by pressing the right arrow</h6>
      <div id="car"  style={{ marginLeft: carPosition + 'px' }} >🏎</div>
      <hr>
      </hr>
      <h1>stow watch</h1>
      <button id="start" onClick={startStopwatch}> start</button>
      <button onClick={stopStopwatch}>stop</button>
      <button onClick={clearStopwatch}>clear</button>
      <p style={{ fontSize: "100px",color:"green"}}>time:{initialTime}sec</p>
    </div>
   
  );
}