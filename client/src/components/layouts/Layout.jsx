import React, { useState } from "react";
import NavBar from "./Navbar";
import SideNavBar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import MainContent from "./MainContent";
import NewTask from "../popups/NewTask";
import RegisterNewMember from "../teams/registerNewMember";
import RegisterProject from "../project/RegisterProjectForm";

const Layout = () => {
  const location = useLocation();
  const [openNewTaskPopup, setOpenNewTaskPopup] = useState(false);
  const [openCreteMember, setOpenCreteMember] = useState(false);
  const [openRegisterProject, setOpenRegisterProject] = useState(false);

  const pageConfig = {
    "/": {
      buttonText: "+ New Task",
    },
    "/projects": {
      titleIsRequired: true,
      title: "Projects",
      subTitle: "Manage and track all your projects.",
      buttonText: "+ New Project",
      toggleRequire: true,
    },
    "/teams": {
      titleIsRequired: true,
      title: "Teams",
      subTitle: "Manage your team members and their access..",
      buttonText: "+ Add Team Members",
      toggleRequire: true,
    },
  };

  const currentPage = pageConfig[location.pathname] || {};

  const handleAddNewTask = () => {
    if (location.pathname === "/teams") {
      setOpenCreteMember(true);
    }
    if (location.pathname === "/projects") {
      setOpenRegisterProject(true);
    } else {
      setOpenNewTaskPopup(true);
    }
  };

  const handleClosePopup = () => {
    setOpenNewTaskPopup(false);
    setOpenCreteMember(false);
    setOpenRegisterProject(false);
  };

  return (
    <div className="relative flex flex-row min-h-screen">
      <SideNavBar />
      {openRegisterProject ? (
        <RegisterProject onClickBack={handleClosePopup}/>
      ) : (
        <div className="flex-1">
          <NavBar
            titleIsRequired={currentPage.titleIsRequired}
            title={currentPage.title}
            subTitle={currentPage.subTitle}
            buttonText={currentPage.buttonText}
            onClick={handleAddNewTask}
            toggleRequire={currentPage.toggleRequire}
          />
          <MainContent>
            <Outlet />
          </MainContent>
        </div>
      )}
      {openNewTaskPopup && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <NewTask onClose={handleClosePopup} />
        </div>
      )}
      {openCreteMember && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <RegisterNewMember handleClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default Layout;
