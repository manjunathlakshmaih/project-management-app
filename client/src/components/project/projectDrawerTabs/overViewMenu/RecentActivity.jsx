import ProjectIcon from "../../../../assets/ProjectIcon.svg";
import StatusIcon from "../../../../assets/StatusIcon.svg";
import TaskIcon from "../../../../assets/TaskIcon.svg";
import Button from "../../../common/Button";
const RecentActivity = ({ activity }) => {
  const activityIcons = {
    project_created: ProjectIcon,
    status_updated: StatusIcon,
    task_added: TaskIcon,
  };

  const visibleActivity = Array.isArray(activity) ? activity.slice(0, 3) : [];

  const HandleAllActivity = () => {
    console.log("View all Button is Clicked");
  };
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-bold mb-3">Recent Activity</h3>
      <div className="flex flex-col gap-4 mb-4">
        {visibleActivity.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img className="w-12" src={activityIcons[item.type]} />
                {index < visibleActivity.length - 1 && (
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
        onClick={HandleAllActivity}
        className="w-full h-8 text-base text-purple-600 bg-slate-800 rounded-md shadow-sm shadow-slate-700 "
      />
    </div>
  );
};

export default RecentActivity;
