import { useState } from "react";
import ProjectDrawerHeader from "./ProjectDrawerHeader";
import ProjectTimelineStatus from "./ProjectTimelineStatus";
import DetailsDrawerProgressBar from "../../common/ProgressBar";
import ProjectTabs from "../projectDrawerTabs/ProjectTabs";
import Overview from "../projectDrawerTabs/overViewMenu/OverView";
import TaskDetail from "../projectDrawerTabs/taskMenu/TaskMenu";
import TeamDetail from "../projectDrawerTabs/teamMenu/TeamDetail";
import FileMenu from "../projectDrawerTabs/filesMenu/fileMenu";
import RecentActivity from "../projectDrawerTabs/overViewMenu/RecentActivity";

const ProjectDetailsDrawer = ({ project, onClick }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before calling onClick
    setTimeout(() => {
      onClick();
    }, 300);
  };

  if (!project) return null;

  const HandleonTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`w-full max-w-115 min-w-100 border border-slate-500 bg-slate-900 px-4 pt-4 pb-4 rounded-2xl transition-all duration-300 transform origin-top-right ${
        isClosing ? "scale-0 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <ProjectDrawerHeader
        title={project.title}
        priority={project.priority}
        onClick={handleClose}
      />
      <p className="w-full max-w-90 mb-7 line-clamp-3 line-heg leading-relaxed text-slate-400">
        {project.description}
      </p>
      <ProjectTimelineStatus
        startDate={project.startDate}
        dueDate={project.dueDate}
        StatusOfPrj={project.status}
      />
      <DetailsDrawerProgressBar
        progress={project.progress}
        name="In Progress"
        isPctRequired={true}
        className="px-3 mb-8"
      />
      <ProjectTabs onTabChange={HandleonTabChange} />
      {activeTab === "Overview" && (
        <Overview taskSummary={project} onViewAll={() => {
          HandleonTabChange("Activity");
        }} />
      )}
      {activeTab === "Tasks" && <TaskDetail taskData={project} />}
      {activeTab === "Team" && <TeamDetail TeamData={project} />}
      {activeTab === "Files" && (
        <FileMenu fileDetails={project}/>
      )}
      {activeTab === "Activity" && (
        <RecentActivity activity={project.activity} isActivityMenu={true} activeTab={activeTab} />
      )}
    </div>
  );
};

export default ProjectDetailsDrawer;
