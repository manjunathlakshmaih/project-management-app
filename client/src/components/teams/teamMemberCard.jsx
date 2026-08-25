import dot from "../../assets/Dot.svg";
import { useOutletContext } from "react-router-dom";

const TeamMemberCard = ({ teamData }) => {
  const { isRegisterCardOpened } = useOutletContext();
  const membersData = Array.isArray(teamData) ? teamData : [];

  const roleColors = {
    project_manager: "text-purple-400",
    developer: "text-blue-400",
    team_lead: "text-green-400",
    qa: "text-yellow-400",
    designer: "text-pink-400",
    owner: "text-red-400",
  };

  const statusColor = {
    Active: "bg-green-700",
    "In Active": "bg-yellow-400",
    "Not Available": "bg-red-400",
  };

  return (
    <div className={`grid gap-3.5 ${isRegisterCardOpened ? "sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4" : "grid-cols-3 lg:grid-cols-4 xlg:grid-cols-5" }`}>
      {membersData.map((data, id) => (
        <div
          key={id}
          className="flex flex-col border border-slate-700 bg-slate-900/10 p-5 rounded-2xl"
        >
          <div className="flex justify-between items-start mb-5 relative">
            <div className="relative">
              <img
                className="w-20 h-20 rounded-full"
                src={
                  data && data.profileImage
                    ? `http://localhost:5000/${data.profileImage.replace(/\\/g, "/")}`
                    : ""
                }
                alt={data?.fullName || "profile"}
              />
              <span
                className={`w-4 h-4 absolute ${
                  statusColor[data.status] || "text-slate-400"
                } rounded-full bottom-0.5 right-1 border-3 border-black`}
              ></span>
            </div>

            <img className="w-7 pt-2" src={dot} />
          </div>
          <h3 className="text-xl font-bold">{data.fullName}</h3>
          <span
            className={`text-sm font-medium  ${
              roleColors[data.role] || "text-slate-400"
            }`}
          >
            {data.role}
          </span>
          <p className="text-sm text-slate-500 overflow-hidden" title={data.email}>{data.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberCard;
