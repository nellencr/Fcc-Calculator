import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calcBtns.push(
      <button
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div id="display" className="show-input">{input}</div>
      <div id="decimal" className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button id = "clear"
        onClick = {
          () => setInput(input.substr(0, input.length - 1))
        } >
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button button id = "add"
        onClick = {
          e => setInput(input + e.target.value)
        }
        value = "+" >
          +
        </button>

        {/* minus btn */}
        <button button id = "subtract"
        onClick = {
          e => setInput(input + e.target.value)
        }
        value = "-" >
          {" "}
          -{" "}
        </button>

        <button button id = "multiply"
        onClick = {
          e => setInput(input + e.target.value)
        }
        value = "*" >
          {" "}
          *
        </button>

        <button id="divide"  onClick={e => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button id = "equals"
          onClick={e => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
