import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";
import KanbanBoard from "../components/dashboard/KanbanBoard/KanbanBoard";
import ActivityFeed from '../components/dashboard/activityfeed/ActivityFeed';

const Dashboard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <StatsCard />
      </div>
      <DashboardHeader />
      <KanbanBoard />
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;
