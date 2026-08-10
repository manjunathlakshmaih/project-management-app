import ProjectAssignees from "./ProjectAssignees";
import RecentActivity from "./RecentActivity";
import TaskSummary from "./TaskSummary";

const Overview = ({ taskSummary, onViewAll }) => {
  const summary = taskSummary?.tasks ?? [];
  console.log("Overview received onViewAll:", onViewAll);
  return (
    <>
      <div>
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-lg font-bold">Description</h3>
          <p className="w-full max-w-90 mb-3 line-clamp-3 line-heg leading-relaxed text-slate-400">
            {taskSummary.description}
          </p>
        </div>
      </div>
      <TaskSummary taskSummaryData={summary}/>
      <hr className="my-3 border-slate-700" />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">Team Members</h3>
        <ProjectAssignees
          users={taskSummary.members}
          className={"mt-2"}
          drawerMembers={true}
        />
      </div>
      <hr className="my-3 border-slate-700" />
      <RecentActivity activity={taskSummary.activity} onViewAll={onViewAll} />
    </>
  );
};

export default Overview;
