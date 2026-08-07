const TaskSummary = ({ taskSummaryData = [] }) => {
  const summaryData = Array.isArray(taskSummaryData)
    ? [...taskSummaryData]
    : [];

    console.log("summaryData", summaryData);

  const uniqueStatuses = [...new Set(summaryData.map((task) => task.status))];
  const renderColors = (status) => {
    if (status === "To Do") return "bg-red-400";
    if (status === "In Progress") return "bg-green-400";
    if (status === "Review") return "bg-yellow-400";
    if (status === "Done") return "bg-blue-400";

    return "bg-slate-400";
  };

  const getCountOfTaskStatus = (taskStatus) => {
    return summaryData.filter((task) => task.status === taskStatus).length;
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2.5">Tasks Summary</h3>
      {uniqueStatuses.map((status, id) => (
        <div
          key={id}
          className="space-y-2 flex flex-row items-center justify-between pr-3"
        >
          <div className="flex items-center gap-2">
            <span
              className={`h-3 w-3 rounded-full ${renderColors(status)}`}
            ></span>
            <span className="text-base">{status}</span>
          </div>
          <div>
            <span className="text-base text-slate-300 bg-slate-800 border border-slate-800 px-2 rounded-sm">
              {getCountOfTaskStatus(status)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskSummary;
