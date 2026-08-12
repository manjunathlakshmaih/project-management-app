import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";
import KanbanBoard from "../components/dashboard/KanbanBoard/KanbanBoard";
import ActivityFeed from "../components/dashboard/activityfeed/ActivityFeed";
import { fetchTasks } from "../redux/task/taskThunk";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  console.log("taskData:",tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
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
