import React from "react";
import NavBar from "./Navbar";
import SideNavBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <SideNavBar />
      <div className="flex-1">
        <NavBar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  );
};

export default Layout;
