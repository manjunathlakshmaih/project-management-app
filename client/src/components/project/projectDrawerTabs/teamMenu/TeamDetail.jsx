import Button from "../../../common/Button";
import moreInfo from "../../../../assets/dot.svg";
import { getDesignationClasses } from "../../../../utils/styles/taskTabHelper";

const TeamDetail = ({ TeamData = [] }) => {
  const TeamMembers = TeamData.members || [];

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
              <span className={`w-fit border py-0.5 px-2 rounded-2xl font-medium text-sm ${getDesignationClasses(data.designation)}`}>
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
