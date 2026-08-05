import projectIcon from "../../../assets/project.svg";
const ProjectDrawerHeader = ({ title, priority, onClick }) => {
  const renderConditionalColor = () => {
    if (priority === "High")
      return "text-pink-400 bg-gradient-to-r from-pink-500/15 to-red-500/10 border-pink-500/20";

    if (priority === "Medium")
      return "text-yellow-400 bg-gradient-to-r from-yellow-500/15 to-orange-500/10 border-yellow-500/20";

    if (priority === "Low")
      return "text-green-400 bg-gradient-to-r from-green-500/15 to-emerald-500/10 border-green-500/20";
  };
  return (
    <div className="flex justify-between items-start gap-20 mb-4">
      <div className="flex flex-row items-center gap-2">
        <img className="w-13" src={projectIcon} alt="projectIcon" />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <span
            className={`w-fit text-xs flex items-center gap-2 px-2 py-1 rounded-full border backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 ${renderConditionalColor()}`}
          >
            🔴 {priority} Priority
          </span>
        </div>
      </div>
      <button className="pt-1.5" onClick={onClick}>&#10006;</button>
    </div>
  );
};

export default ProjectDrawerHeader;
