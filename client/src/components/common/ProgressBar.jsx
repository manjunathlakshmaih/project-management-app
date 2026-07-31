const ProgressBar = ({ progress = 0, className = "" }) => {
  const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

  const getProgressColor = () => {
    if (safeProgress < 50) return "bg-red-500";

    if (safeProgress < 80) return "bg-yellow-500";

    return "bg-green-500";
  };
  return (
    <div
      className={`mt-4 h-2 w-full overflow-hidden bg-slate-700 rounded-full ${className}`.trim()}
    >
      <div
        className={`h-2 rounded-full ${getProgressColor()}`}
        style={{ width: `${safeProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
