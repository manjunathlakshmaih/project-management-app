import Dots from "../../assets/dot.svg";

const ProjectDetailCard = ({ heading, Priority, className, Description }) => {
  return (
    <div className="w-100 border border-slate-500 bg-slate-900 px-4 pt-4 pb-4 rounded-2xl">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{heading}</h2>
        <div className="flex flex-row items-center gap-2">
          <span className={`${className} border border-slate-400 rounded-2xl pl-2 pr-2 pt-1 pb-1 text-sm`}>{Priority}</span>
          <img src={Dots} alt="dot" />
        </div>
      </div>
      <p className="w-60 line-clamp-3 line-heg leading-relaxed text-slate-400">{Description}</p>
      
    </div>
  );
};

export default ProjectDetailCard;
