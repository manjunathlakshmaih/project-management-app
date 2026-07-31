import React, { useState } from "react";
import NavBar from "./Navbar";
import SideNavBar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import MainContent from "./MainContent";
import NewTask from "../newTask/NewTask";

const Layout = () => {
  const location = useLocation();
  const [openNewTaskPopup, setOpenNewTaskPopup] = useState(false);

  const pageConfig = {
    "/": {
      buttonText: "+ New Task",
    },
    "/projects": {
      titleIsRequired: true,
      title: "Projects",
      subTitle: "Manage and track all your projects.",
      buttonText: "+ New Project",
      toggleRequire: true
    },
  };

  const currentPage = pageConfig[location.pathname] || {};

  const handleAddNewTask = () => {
    setOpenNewTaskPopup(true);
  };

  const handleClosePopup = () => {
    setOpenNewTaskPopup(false);
  };

  return (
    <div className="relative flex min-h-screen">
      <SideNavBar />
      <div className="flex-1">
        <NavBar
          titleIsRequired = {currentPage.titleIsRequired}
          title={currentPage.title}
          subTitle={currentPage.subTitle}
          buttonText={currentPage.buttonText}
          onClick={handleAddNewTask}
          toggleRequire = {currentPage.toggleRequire}
        />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
      {openNewTaskPopup && <NewTask onClose={handleClosePopup} />}
    </div>
  );
};

export default Layout;
