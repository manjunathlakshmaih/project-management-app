const ActivityCard = ({ name, progress, color }) => {
  const pct = typeof progress === "number" ? Math.max(0, Math.min(100, progress)) : 0;
  return (
    <div className="flex flex-col items-start gap-2 w-full mb-4">
      <div className="flex w-full justify-between">
        <h3 className="font-medium">{name}</h3>
        <span className="text-sm text-slate-400">{pct}%</span>
      </div>

      <div className="w-full h-2 rounded-full bg-slate-700">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${pct}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ActivityCard;
