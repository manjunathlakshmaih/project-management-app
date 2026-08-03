import ProjectDrawerHeader from "./ProjectDrawerHeader";
const ProjectDetailsDrawer = ({project, onClick}) => {
    if (!project) return null;
  return (
    <div>
      <ProjectDrawerHeader title={project.title} priority={project.priority} onClick={onClick}/>
    </div>
  );
};

export default ProjectDetailsDrawer;