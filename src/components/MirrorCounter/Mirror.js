import React from "react";
import { useCount } from "../../context/Count";

function Mirror() {
  const { count } = useCount();

  return (
    <div>
      <b>Count: {count}</b>
    </div>
  );
}

export default Mirror;
