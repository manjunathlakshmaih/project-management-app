import ProgressBar from "../../common/ProgressBar";

const TaskCard = ({ title, dueDate, progress }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 mb-4">
      <h3 className="font-medium">{title}</h3>

      {dueDate && <p className="text-sm text-slate-400 mt-2">{dueDate}</p>}

      {progress !== undefined && <ProgressBar progress={progress} className="mt-4"/>}
    </div>
  );
};

export default TaskCard;
