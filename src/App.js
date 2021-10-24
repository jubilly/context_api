import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Mirror from "./components/MirrorCounter/Mirror";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
      <hr />
      <Mirror count={count} />
    </div>
  );
}

export default App;
