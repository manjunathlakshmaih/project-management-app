import ProjectStatsCard from "../components/project/ProjectStatsCard";
import tatal from "../assets/total.svg";
import active from "../assets/active.svg";
import completed from "../assets/completed.svg";
import paused from "../assets/paused.svg";
import ProjectSearchCard from "../components/project/ProjectSearchCard";
import ProjectDetailCard from "../components/project/ProjectDetailCard";

const Projects = () => {
  const ProjectStatsData = [
    {
      icon: tatal,
      title: "Total Projects",
      value: 246,
      status: "All Time Projects",
    },
    {
      icon: active,
      title: "Active Projects",
      value: 246,
      status: "In progress",
    },
    {
      icon: completed,
      title: "Completed",
      value: 246,
      status: "Successfully done",
    },
    {
      icon: paused,
      title: "On Hold",
      value: 246,
      status: "Paused Projects",
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {ProjectStatsData.map((stats, index) => (
          <ProjectStatsCard
            key={index}
            icon={stats.icon}
            title={stats.title}
            value={stats.value}
            status={stats.status}
          />
        ))}
      </div>
      <ProjectSearchCard />
      <ProjectDetailCard
        heading="E-Commerce Platform"
        Priority="High"
        Description="Modern e-commerce Web application with admin panel and analytics"
        progress={100}
      />
    </div>
  );
};

export default Projects;
