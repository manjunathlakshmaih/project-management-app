const ProgressBar = ({ progress = 0, className = "", name, isPctRequired = false}) => {
  const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

  const getProgressColor = () => {
    if (safeProgress < 50) return "bg-red-500";

    if (safeProgress < 80) return "bg-yellow-500";

    return "bg-green-500";
  };
  return (
    <div className={`w-full ${className}`.trim()}>
      {isPctRequired && (
        <div className="mb-2 flex w-full justify-between">
          <h3 className="font-medium">{name}</h3>
          <span className="text-sm text-slate-400">{safeProgress}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
        <div
          className={`h-2 rounded-full ${getProgressColor()}`}
          style={{ width: `${safeProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
