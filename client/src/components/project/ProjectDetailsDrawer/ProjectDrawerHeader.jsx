import projectIcon from "../../../assets/project.svg";
import { getPriorityBadgeClasses, getPriorityDotClasses } from "../../../utils/styles/priorityHelpers";

const ProjectDrawerHeader = ({ title, priority, onClick }) => {
  return (
    <div className="flex justify-between items-start gap-20 mb-4">
      <div className="flex flex-row items-center gap-2">
        <img className="w-13" src={projectIcon} alt="projectIcon" />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <div
            className={`flex flex-row items-center justify-center gap-1.5 w-fit border py-0.5 px-2 rounded-2xl font-medium text-sm ${getPriorityBadgeClasses(priority)}`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${getPriorityDotClasses(priority)}`}
            ></span>
            <span className="text-xs">{priority} Priority</span>
          </div>
        </div>
      </div>
      <button className="pt-1.5" onClick={onClick}>
        &#10006;
      </button>
    </div>
  );
};

export default ProjectDrawerHeader;
