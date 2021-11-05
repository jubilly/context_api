import React from "react";
import { useCount } from "../../context/Count";

function Counter({ count, setCount }) {
  console.log("log teste 1");
  return (
    <div>
      <span>
        <b>Count: {count}</b>
      </span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;
