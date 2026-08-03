import RecentActivity from "./RecentActivityCard";
import ProductivityProgressBar from "../../common/ProgressBar";

const ActivityFeed = () => {
  const teamData = [
    {
      id: 1,
      name: "Manjunath",
      progress: 70,
      action: "created task 'Landing Page'",
      time: "2h ago",
    },
    {
      id: 2,
      name: "Priya",
      progress: 45,
      action: "commented on 'Auth Flow'",
      time: "4h ago",
    },
    {
      id: 3,
      name: "Arun",
      progress: 92,
      action: "marked 'DB Design' done",
      time: "1d ago",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 mt-8 gap-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
        <h2 className="font-semibold text-lg mb-5">Team Productivity</h2>
        {teamData.map((member) => (
          <ProductivityProgressBar
            key={member.id}
            name={member.name}
            progress={member.progress}
            isPctRequired={true}
            className="mt-4"
          />
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
        <h2 className="font-semibold text-lg mb-5">Recent Activity</h2>
        {teamData.map((r) => (
          <RecentActivity
            key={r.id}
            user={r.user}
            action={r.action}
            time={r.time}
            progress={r.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
