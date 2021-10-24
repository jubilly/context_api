import React, { useState } from "react";

function Counter({ count, setCount }) {
  return (
    <div>
      <span>
        <b>Count:</b>
        {count}
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
