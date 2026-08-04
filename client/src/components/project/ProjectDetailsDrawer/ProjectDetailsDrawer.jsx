import { useState } from "react";
import ProjectDrawerHeader from "./ProjectDrawerHeader";
import ProjectTimelineStatus from "./ProjectTimelineStatus";
import DetailsDrawerProgressBar from "../../common/ProgressBar";
import ProjectTabs from "./ProjectTabs";
import Overview from "./ProjectOverView";

const ProjectDetailsDrawer = ({ project, onClick }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [openOverView, setOpenOverView] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before calling onClick
    setTimeout(() => {
      onClick();
    }, 300);
  };

  if (!project) return null;

  const tabs = ["Overview", "Tasks", "Team", "Files", "Activity"];

  const handleProjectTabs = (tab) => {
    setOpenOverView(tab === "Overview");
  };

  return (
    <div
      className={`w-fit max-w-115 border border-slate-500 bg-slate-900 px-4 pt-4 pb-4 rounded-2xl transition-all duration-300 transform origin-top-right ${
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
      />
      <ProjectTabs navList={tabs} onClick={handleProjectTabs} />
      {openOverView && <Overview taskSummary={project} />}
      <hr className="my-4 border-slate-700" />
    </div>
  );
};

export default ProjectDetailsDrawer;
