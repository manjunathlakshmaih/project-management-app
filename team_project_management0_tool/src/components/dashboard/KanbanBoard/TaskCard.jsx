const TaskCard = ({ title, dueDate, progress }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 mb-4">
      <h3 className="font-medium">{title}</h3>

      {dueDate && <p className="text-sm text-slate-400 mt-2">{dueDate}</p>}

      {progress && (
        <div className="mt-4 h-2 bg-slate-700 rounded-full">
          <div className="h-2 bg-yellow-400 rounded-full w-3/4" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
