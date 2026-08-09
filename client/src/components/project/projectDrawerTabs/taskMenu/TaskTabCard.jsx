import { getPriorityPointClasses, getWorkProgressClasses } from "../../../../utils/styles/taskTabHelper";

const TaskCards = ({ taskData = [] }) => {
  const cardDetail = Array.isArray(taskData) ? [...taskData] : [];

  return (
    <div>
      {cardDetail.map((task) => (
        <div
          key={task.id}
          className="flex flex-row justify-between items-center mb-1.5 w-full bg-slate-800 p-2 border rounded-lg"
        >
          <div className="flex flex-row items-center gap-2.5">
            <span
              className={`w-4 h-4 rounded-full ${getPriorityPointClasses(task.status)} `}
            ></span>
            <div>
              <h3
                className="text-lg font-semibold line-clamp-1 w-45"
                title={task.title}
              >
                {task.title}
              </h3>
              <span className={`${getWorkProgressClasses(task.status)} text-sm font-medium`}>
                {task.status}
              </span>
            </div>
          </div>
          <div className="flex justify-items-start">
            {task.assignedMembers?.slice(0, 2).map((members) => (
              <div key={members.id}>
                <img
                  className="w-7 border rounded-full"
                  src={members.avatar}
                  alt={members.name}
                />
              </div>
            ))}
          </div>
          <div>
            <span className="text-base text-slate-400">{task.dueDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCards;
