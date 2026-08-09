import { useState } from "react";
import Button from "../../../common/Button";
import TaskCards from "./TaskTabCard";
import { taskFilters } from "../../../../utils/styles/taskTabHelper";

const TaskDetail = ({ taskData = [] }) => {
  const [renderFilteredData, setRenderFilteredData] = useState("All");
  

  const TaskDetails = taskData?.tasks ?? [];
  const AllTasks = TaskDetails.length;

  const renderFilterCount = (tasks, status) => {
    const fliterCount = tasks.filter((task) => task.status === status).length;
    return fliterCount;
  };

  const getTasksByStatus = (status) => {
    if (status === "All") return TaskDetails;
    const filteredData = TaskDetails.filter((task) => task.status === status);
    return filteredData;
  };

  const filteredTask = getTasksByStatus(renderFilteredData);

  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        <Button className="bg-blue-700 py-1 px-2 border-slate-200 rounded-2xl text-base" text="+ Add Task" type="button" />
      </div>
      <div className="flex justify-between mb-3">
        {taskFilters.map((status) => (
          <button className="bg-slate-900 border border-slate-300 py-1 px-1.5 rounded-lg text-sm text-slate-400" onClick={() => setRenderFilteredData(status)} key={status}>
            {`${status} (${status === "All" ? AllTasks : renderFilterCount(TaskDetails, status)})`}
          </button>
        ))}
      </div>
      <TaskCards taskData={filteredTask} />
    </div>
  );
};

export default TaskDetail;
