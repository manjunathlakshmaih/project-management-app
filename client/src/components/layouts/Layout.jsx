import React,{useState} from "react";
import NavBar from "./Navbar";
import SideNavBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MainContent from "./MainContent";
import NewTask from "../newTask/NewTask";

const Layout = () => {
  const [openNewTaskPopup, setOpenNewTaskPopup] = useState(false);
  const handleAddNewTask = () => {
    setOpenNewTaskPopup(true);
  }
  const handleClosePopup = () => {
    setOpenNewTaskPopup(false);
  }
  return (
    <div className="relative flex min-h-screen">
      <SideNavBar />
      <div className="flex-1">
        <NavBar onClick={handleAddNewTask}/>
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
      {openNewTaskPopup && <NewTask onClose={handleClosePopup} />}
    </div>
  );
};

export default Layout;
