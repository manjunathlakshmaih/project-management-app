import TaskCard from "./TaskCard";

const KabanColumn = ({ title, tasks }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
      <h2 className="font-semibold text-lg mb-5">{title}</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          dueDate={task.dueDate}
          progress={task.progress}
        />
      ))}
    </div>
  );
};

export default KabanColumn;
