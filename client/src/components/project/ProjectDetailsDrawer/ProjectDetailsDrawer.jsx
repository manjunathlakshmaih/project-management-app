import ProjectDrawerHeader from "./ProjectDrawerHeader";
const ProjectDetailsDrawer = ({project, onClick}) => {
    if (!project) return null;
  return (
    <div className="w-fit border border-slate-500 bg-slate-900 px-4 pt-4 pb-4 rounded-2xl">
      <ProjectDrawerHeader title={project.title} priority={project.priority} onClick={onClick}/>
    </div>
  );
};

export default ProjectDetailsDrawer;