import Dots from "../../assets/dot.svg";

const ProjectCatdHeader = ({heading, priorityClassName, Priority}) => {
  return (
    <div className="flex flex-row justify-between gap-2 items-center mb-4">
      <h2 className="text-xl font-bold min-w-20">{heading}</h2>
      <div className="flex flex-row items-center gap-2">
        <span
          className={`${priorityClassName} border border-slate-400 rounded-2xl pl-2 pr-2 pt-1 pb-1 text-sm`}
        >
          {Priority}
        </span>
        <img src={Dots} alt="dot" />
      </div>
    </div>
  );
};

export default ProjectCatdHeader;
