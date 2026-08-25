import TotalMembers from "../../assets/teams/TotalMembers.svg";
import ActiveMembers from "../../assets/teams/activemember.svg";
import Developers from "../../assets/teams/developers.svg";
import Managers from "../../assets/teams/managers.svg";

const statConfig = {
  "Total Team Members": {
    icon: TotalMembers,
    description: "All Team Members",
    bgColor: "bg-purple-900/35"
  },
  "Active Members": {
    icon: ActiveMembers,
    description: "Currently Active Members",
    bgColor: "bg-green-900/35"
  },
  Developers: {
    icon: Developers,
    description: "Development Team",
    bgColor: "bg-blue-900/35"
  },
  Managers: {
    icon: Managers,
    description: "Project Managers",
    bgColor: "bg-yellow-900/35"
  },
};

const teamStats = ({ statsSummary = [] }) => {
  return (
    <div className="w-full flex justify-around flex-wrap gap-5 mb-5">
      {statsSummary.map((stats, id) => {
        const config = statConfig[stats.label];
        return (
          <div
            key={id}
            className="w-full min-w-60 max-w-80 flex flex-row justify-center gap-5 px-5 py-4 items-start flex-wrap border border-slate-800 bg-slate-800/10 rounded-2xl"
          >
            <div className={`w-20 ${config.bgColor} flex justify-center rounded-2xl py-1`}>
              <img src={config.icon} alt={stats.label} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-200">{stats.label}</h3>
              <span className="text-4xl font-bold">{stats.count}</span>
              <p className="text-sm font-bold text-slate-500">{config.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default teamStats;
