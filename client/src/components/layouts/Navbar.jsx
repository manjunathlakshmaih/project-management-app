import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const NavHeader = ({
  onClick,
  title,
  subTitle,
  buttonText,
  titleIsRequired = false,
  toggleRequire = false,
}) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex items-center justify-between border-b border-slate-800 p-4">
      {titleIsRequired && (
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="text-slate-400">{subTitle}</p>
        </div>
      )}
      <header className="px-8 py-5">
        <div className="flex ">
          <Input
            placeholder="Search..."
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full md:w-96 h-14"
            isSearch
          />
        </div>
      </header>
      <div className="flex items-center gap-2">
        <Button
          text={buttonText}
          onClick={onClick}
          className="bg-linear-to-r from-violet-600 to-indigo-600 h-14 px-1 rounded-xl font-medium w-full"
        />
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
          A
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
