import calenderlbl from "../../../assets/calenderlbl.svg";
import calenderIcon from "../../../assets/calenderIcon.svg";
import status from "../../../assets/status.svg";

const ProjectTimelineStatus = ({ startDate, dueDate, StatusOfPrj }) => {
  return (
    <div className="flex flex-row justify-center gap-8 mb-10">
      <div className="border-r-2 border-slate-700 pr-5">
        <span className="flex flex-row gap-1.5 items-center mb-1">
          <img src={calenderIcon} /> Start Date
        </span>
        <p className="flex flex-row gap-1.5 items-center">
          <img src={calenderlbl} />
          {startDate}
        </p>
      </div>
      <div className="border-r-2 border-slate-700 pr-5">
        <span className="flex flex-row gap-1.5 items-center mb-1">
          <img src={calenderIcon} /> Due Date
        </span>
        <p className="flex flex-row gap-1.5 items-center">
          <img src={calenderlbl} />
          {dueDate}
        </p>
      </div>
      <div>
        <span className="flex flex-row gap-1.5 items-center mb-1">
          <img src={status} /> Status
        </span>
        <p className="flex flex-row gap-1.5 items-center">{StatusOfPrj}</p>
      </div>
    </div>
  );
};

export default ProjectTimelineStatus;
