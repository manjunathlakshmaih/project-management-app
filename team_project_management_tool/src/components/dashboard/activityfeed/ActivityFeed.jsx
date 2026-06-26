import RecentActivity from "./RecentActivityCard";
import ActivityCard from "./ActivityFeedCard";

const ActivityFeed = () => {
  const teamData = [
    { id: 1, name: "Manjunath", progress: 70, color: "bg-blue-400" },
    { id: 2, name: "Priya", progress: 45, color: "bg-yellow-400" },
    { id: 3, name: "Arun", progress: 92, color: "bg-green-400" },
  ];

  const recent = [
    { id: 1, user: "Manjunath", action: "created task 'Landing Page'", time: "2h ago", color: "border-blue-400" },
    { id: 2, user: "Priya", action: "commented on 'Auth Flow'", time: "4h ago", color: "border-yellow-400" },
    { id: 3, user: "Arun", action: "marked 'DB Design' done", time: "1d ago", color: "border-green-400" },
  ];

  return (
    <div className="grid md:grid-cols-2 mt-8 gap-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
        <h2 className="font-semibold text-lg mb-5">Team Productivity</h2>
        {teamData.map((member) => (
          <ActivityCard
            key={member.id}
            name={member.name}
            progress={member.progress}
            color={member.color}
          />
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
        <h2 className="font-semibold text-lg mb-5">Recent Activity</h2>
        {recent.map((r) => (
          <RecentActivity
            key={r.id}
            user={r.user}
            action={r.action}
            time={r.time}
            color={r.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
