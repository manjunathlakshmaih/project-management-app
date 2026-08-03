import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";
import KanbanBoard from "../components/dashboard/KanbanBoard/KanbanBoard";
import ActivityFeed from "../components/dashboard/activityfeed/ActivityFeed";

const Dashboard = () => {
  const StatsCardDetails = [
    { Heading: "Total Task", data: 245 },
    { Heading: "Completed", data: 245 },
    { Heading: "In Progress", data: 245 },
    { Heading: "Pending", data: 245 },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {StatsCardDetails.map((stats, index) => (
          <StatsCard key={index} Heading={stats.Heading} value={stats.data} />
        ))}
      </div>
      <DashboardHeader />
      <KanbanBoard />
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;
