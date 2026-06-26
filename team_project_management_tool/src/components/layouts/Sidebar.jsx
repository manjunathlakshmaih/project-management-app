import React from "react";

const NavITems = [
  { link: "#", Item: "Dashboard" },
  { link: "#", Item: "Projects" },
  { link: "#", Item: "Teams" },
  { link: "#", Item: "Calendar" },
  { link: "#", Item: "Analytics" },
  { link: "#", Item: "Settings" },
];
const SideNavBar = ({ link, Item }) => {
  return (
    <div className="w-72 bg-slate-900 border-r border-slate-800 hidden lg:block">
      <div className="p-8">
        <h1 className="text-3xl font-bold bg-linear-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
          ProjectFlow
        </h1>
      </div>
      <nav className="px-5 space-y-2 ">
        {NavITems.map((item, index) => (
          <a
            key={index}
            className="block p-4 rounded-2xl hover hover:bg-slate-800 focus:bg-violet-600"
            href={item.link}
          >
            {item.Item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default SideNavBar;
