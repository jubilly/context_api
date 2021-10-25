import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import Mirror from "./components/MirrorCounter/Mirror";
import CountProvider from "./context/Count";

function App() {
  return (
    <CountProvider>
      <div>
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
