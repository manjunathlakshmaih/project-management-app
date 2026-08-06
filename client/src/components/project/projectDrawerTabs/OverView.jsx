import ProjectAssignees from "../ProjectAssignees";
import RecentActivity from "./RecentActivity";

const Overview = ({ taskSummary }) => {
  const summary = taskSummary?.taskSummary ?? [];
  
  const renderColors = (status) => {
    if (status === "To Do") return "bg-red-400";
    if (status === "In Progress") return "bg-green-400";
    if (status === "Review") return "bg-yellow-400";
    if (status === "Done") return "bg-blue-400";

    return "bg-slate-400";
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-lg font-bold">Description</h3>
          <p className="mb-3 line-clamp-3 line-heg leading-relaxed text-slate-400">
            {taskSummary.description}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2.5">Tasks Summary</h3>
          {summary.map((task, id) => (
            <div
              key={id}
              className="space-y-2 flex flex-row items-center justify-between pr-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${renderColors(task.status)}`}
                ></span>
                <span className="text-base">{task.status}</span>
              </div>
              <div>
                <span className="text-base text-slate-300 bg-slate-800 border border-slate-800 px-2 rounded-sm">
                  {task.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-3 border-slate-700" />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold" >Team Members</h3>
        <ProjectAssignees
          users={taskSummary.members}
          className={"mt-2"}
          drawerMembers={true}
        />
      </div>
      <hr className="my-3 border-slate-700" />
      <RecentActivity activity={taskSummary.activity}  />
    </> 
  );
};

export default Overview;
