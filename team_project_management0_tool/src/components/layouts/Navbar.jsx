import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="border-b border-slate-800 px-8 py-5">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search..."
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={
            "bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 w-full md:w-96 outline-none"
          }
        />
        <div className="flex items-center gap-4">
          <Button
            text="+ New Task"
            onClick={() => console.log("Searching for:", searchValue)}
            className="bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 rounded-xl font-medium"
          />
          <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
