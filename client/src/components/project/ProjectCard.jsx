import ProjectCatdHeader from "./ProjectCardHeader";
import ProjectProgressBar from "../common/ProgressBar";
import ProjectAssignees from "./ProjectAssignees";
import ProjectActions from "./ProjectActions";

const ProjectDetailCard = ({
  heading,
  Priority,
  priorityClassName,
  Description,
  progress,
  isPctRequired,
  name,
  members = [],
  dueDate,
  onView
}) => {
  return (
    <div className="border border-slate-500 bg-slate-900 px-4 pt-4 pb-4 rounded-2xl">
      <ProjectCatdHeader
        priorityClassName={priorityClassName}
        heading={heading}
        Priority={Priority}
      />
      <p className="w-60 h-20 line-clamp-3 line-heg leading-relaxed text-slate-400">
        {Description}
      </p>
      <ProjectProgressBar
        progress={progress}
        isPctRequired={isPctRequired}
        name={name}
        className="mt-6"
      />
      <ProjectAssignees users={members} dueDate={dueDate} className={"mt-8"}/>
      <hr className="-mx-4 my-4 border-slate-700" />
      <ProjectActions onView={onView}/>
    </div>
  );
};

export default ProjectDetailCard;
