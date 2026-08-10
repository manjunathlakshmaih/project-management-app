import ProjectIcon from "../../../../assets/ProjectIcon.svg";
import StatusIcon from "../../../../assets/StatusIcon.svg";
import TaskIcon from "../../../../assets/TaskIcon.svg";
import Button from "../../../common/Button";
import file_uploaded from '../../../../assets/file_uploaded.svg';
import member_joined from '../../../../assets/member_joined.svg';

const RecentActivity = ({ activity, isActivityMenu = false, onViewAll }) => {
  const activityIcons = {
    project_created: ProjectIcon,
    status_updated: StatusIcon,
    task_added: TaskIcon,
    file_uploaded: file_uploaded,
    member_joined: member_joined
  };

  const visibleActivity = Array.isArray(activity) ? activity : [];
  const setActivityData = isActivityMenu
    ? visibleActivity
    : visibleActivity.slice(0, 3);

  const handleAllActivity = () => {
    console.log("handleAllActivity triggered");
    console.log("isActivityMenu:", isActivityMenu);
    console.log("onViewAll:", onViewAll);
    console.log("typeof onViewAll:", typeof onViewAll);
    
    if (!isActivityMenu && typeof onViewAll === "function") {
      console.log("Calling onViewAll...");
      onViewAll();
    }
  };
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-bold mb-3">Recent Activity</h3>
      <div className="flex flex-col gap-4 mb-4">
        {setActivityData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img className="w-12" src={activityIcons[item.type]} />
                {index < setActivityData.length - 1 && (
                  <div className="absolute top-11 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-white/20" />
                )}
              </div>
              <p className="text-sm">{item.message}</p>
            </div>
            <p className="text-sm">{item.time}</p>
          </div>
        ))}
      </div>
      <Button
        type="button"
        text="View All activity"
        onClick={handleAllActivity}
        className="w-full h-8 text-base text-purple-600 bg-slate-800 rounded-md shadow-sm shadow-slate-700 cursor-pointer "
      />
    </div>
  );
};

export default RecentActivity;
