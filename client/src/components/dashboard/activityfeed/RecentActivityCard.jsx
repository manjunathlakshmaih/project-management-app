const RecentActivity = ({ user, action, time, color, progress }) => {
 const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

  const getProgressColor = () => {
    if (safeProgress < 50) return "border-red-500";

    if (safeProgress < 80) return "border-yellow-500";

    return "border-green-500";
  };
  
  return (
    <div className={`border-l-2 ${getProgressColor()} pl-3 py-2 mb-2`}> 
      <div className="text-sm font-medium">{user}</div>
      <div className="text-xs text-slate-400">{action} · {time}</div>
    </div>
  );
};

export default RecentActivity;