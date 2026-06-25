const RecentActivity = ({ user, action, time, color }) => {
  return (
    <div className={`border-l-2 ${color} pl-3 py-2 mb-2`}> 
      <div className="text-sm font-medium">{user}</div>
      <div className="text-xs text-slate-400">{action} · {time}</div>
    </div>
  );
};

export default RecentActivity;