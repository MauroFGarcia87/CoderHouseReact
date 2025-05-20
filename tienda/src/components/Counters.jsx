import React from "react";
import { useState } from "react";

const Counters = ({ cantidad, counter, setCounter }) => {
  const restar = () => {
    setCounter(counter - 1);
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  return (
    <div >
      <div className="d-flex">
        <button onClick={restar} disabled={counter == 0}>
          -
        </button>
        <h4>{counter}</h4>
        <button onClick={sumar} disabled={counter >= cantidad}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counters;
