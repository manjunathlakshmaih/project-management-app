import { useState } from "react";
import Button from "./components/common/Button";
import SideNavBar from "./components/layouts/Sidebar";
import NavBar from "./components/layouts/Navbar";
import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex min-h-screen">
      {/* <Button
        text="Click me"
        onClick={handleClick}
        className="hover:bg-amber-700 text-3xl text-amber-50 transform-3d cursor-pointer hover:scale-110 transition duration-300"
      /> */}
      <SideNavBar />
      <div className="flex-1">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
