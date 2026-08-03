import { useState } from "react";
import ProjectOverviewCard from "../components/project/ProjectOverviewCard";
import tatal from "../assets/total.svg";
import active from "../assets/active.svg";
import completed from "../assets/completed.svg";
import paused from "../assets/paused.svg";
import ProjectFilters from "../components/project/ProjectFilters";
import ProjectDetailCard from "../components/project/ProjectCard";
import ProjectDetails from "./data";
import ProjectDetailsDrawer from "../components/project/ProjectDetailsDrawer/ProjectDetailsDrawer";

const Projects = () => {
  const [openDetailDrawer, setOpenDetailDrawer] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const ProjectData = [...ProjectDetails];
  const ProjectStatsData = [
    {
      icon: tatal,
      title: "Total Projects",
      value: 246,
      status: "All Time Projects",
    },
    {
      icon: active,
      title: "Active Projects",
      value: 246,
      status: "In progress",
    },
    {
      icon: completed,
      title: "Completed",
      value: 246,
      status: "Successfully done",
    },
    {
      icon: paused,
      title: "On Hold",
      value: 246,
      status: "Paused Projects",
    },
  ];

  const HandleOnView = (project) => {
    setOpenDetailDrawer(true);
    setSelectedProject(project);
  };

  const HandleOnViewClose = () => {
    setOpenDetailDrawer(false);
    setSelectedProject("");
  };

  return (
    <>
      <div>
        <div className="mb-10 grid gap-6 md:grid-cols-4">
          {ProjectStatsData.map((stats, index) => (
            <ProjectOverviewCard
              key={index}
              icon={stats.icon}
              title={stats.title}
              value={stats.value}
              status={stats.status}
            />
          ))}
        </div>
        <ProjectFilters />
        <div className="grid w-full grid-cols-3 gap-5">
          {ProjectData.map((project) => (
            <ProjectDetailCard
              key={project.id}
              heading={project.title}
              Priority={project.priority}
              Description={project.description}
              progress={project.progress}
              isPctRequired
              name="Progress"
              members={project.members}
              dueDate={project.dueDate}
              onView={() => HandleOnView(project)}
            />
          ))}
        </div>
      </div>
      {openDetailDrawer && <ProjectDetailsDrawer project={selectedProject} onClick={HandleOnViewClose} />}
    </>
  );
};

export default Projects;
