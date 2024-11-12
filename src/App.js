import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + counter * step);

  return (
    <>
      <div style={{ display: "flex", gap: "2px" }}>
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <p>{step}</p>
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <div style={{ display: "flex", gap: "2px" }}>
        <button
          onClick={() => {
            setCounter((s) => s - 1);
          }}
        >
          -
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <p>
        {counter !== 0
          ? `${counter * step} days from Today is ${date}`
          : `Today is ${date}`}
      </p>
    </>
  );
}

export default App;
