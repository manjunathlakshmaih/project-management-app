import ProgressBar from "../../common/ProgressBar";

const ActivityCard = ({ name, progress, task }) => {
  const pct = typeof progress === "number" ? progress : Number(progress) || 0;
  return (
    <div className="flex flex-col items-start gap-2 w-full mb-4">
      <div className="flex w-full justify-between">
        <h3 className="font-medium">{name}</h3>
        <span className="text-sm text-slate-400">{pct}%</span>
      </div>
      <ProgressBar progress={pct} />
    </div>
  );
};

export default ActivityCard;
