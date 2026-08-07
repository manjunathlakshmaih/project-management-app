import Button from "../../common/Button";
import moreInfo from "../../../assets/dot.svg";

const TeamDetail = ({ TeamData = [] }) => {
  const TeamMembers = TeamData.members || [];

  const renderDesignationStyle = (designation) => {
    if(designation === "Owner") return "bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)] ";
    if(designation === "Developer") return "bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]";
    if(designation === "Designer") return "bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]";
    if(designation === "QA") return "py[0_0_20px_rgba(-2 rounded-full bg-amber-500/10 text-amber-400 border 0/20 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)]";
    return "bg-slate-800/80 text-slate-300 border border-slate-700 backdrop-blur-md font-medium shadow-sm"
  }
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Team Members</h2>
        <Button
          className="bg-blue-700 py-1 px-2 border-slate-200 rounded-2xl text-base font-medium"
          text="+ Invite Member"
          type="button"
        />
      </div>
      <div className="flex flex-col">
        {TeamMembers.map((data, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center mb-2 bg-slate-800 py-2 px-2.5 rounded-xl border border-slate-300" 
          >
            <div className="flex flex-row items-center gap-4">
              <img className="w-13 rounded-full" src={data.avatar} />
              <div>
                <h3 className="text-lg font-medium ">{data.name}</h3>
                <p className="text-sm text-slate-500">{data.role}</p>
              </div>
            </div>
            <div className="flex gap-3.5 justify-center items-center">
              <span className={`w-fit border py-0.5 px-2 rounded-2xl font-medium text-sm ${renderDesignationStyle(data.designation)}`}>
                {data.designation}
              </span>
              <div>
                <img src={moreInfo} alt="moreInfo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetail;
