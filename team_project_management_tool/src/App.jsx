import { useState } from "react";
import AppRouters from "./routes/AppRouters";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <AppRouters />
    </div>
  );
}

export default App;
