import Dots from "../../assets/dot.svg";
import { getPriorityBadgeClasses } from "../../utils/styles/priorityHelpers";

const ProjectCatdHeader = ({heading, priorityClassName, Priority}) => {
  return (
    <div className="flex flex-row justify-between gap-2 items-start mb-4">
      <h2 className="text-xl font-bold w-full max-w-45" title={heading}>{heading}</h2>
      <div className="flex flex-row items-center">
        <span
          className={`${getPriorityBadgeClasses(Priority)} border rounded-2xl pl-2 pr-2 pt-1 pb-1 text-sm`}
        >
          {Priority}
        </span>
        <img className="w-8 px-1"  src={Dots} alt="dot" />
      </div>
    </div>
  );
};

export default ProjectCatdHeader;
