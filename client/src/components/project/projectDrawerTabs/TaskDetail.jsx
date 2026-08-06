import { useState } from "react";
import Button from "../../common/Button";

const TaskDetail = ({ taskData = [] }) => {
  const [renderFilteredData, setRenderFilteredData] = useState("All");
  const taskFilters = ["All", "To Do", "In Progress", "Review", "Done"];

  const TaskDetails = taskData.tasks;
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
  console.log(filteredTask);

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-bold">Tasks</h2>
        <Button text="+ Add Task" type="button" />
      </div>
      <div>
        {taskFilters.map((status) => (
          <button onClick={() => setRenderFilteredData(status)} key={status}>
            {`${status} (${status === "All" ? AllTasks : renderFilterCount(TaskDetails, status)})`}
          </button>
        ))}
      </div>
      <div>
        {filteredTask.map((task, index) => (
          <div key={index}>
            <span>{task.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDetail;
