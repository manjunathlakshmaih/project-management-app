const StatsCard = ({ Heading, value }) => {
  const StatValueColors = {
    "Total Task": "text-white",
    Completed: "text-green-400",
    "In Progress": "text-yellow-400",
    Pending: "text-red-400",
  };
  const colorClass = StatValueColors[Heading] || "text-white";
  return (
    <div className="glass border border-white/10 p-6 rounded-3xl hover:bg-linear-to-r from-violet-600 to-indigo-600">
      <p className="text-slate-400 hover: opacity-80">{Heading}</p>
      <h2 className={`text-4xl font-bold mt-2 ${colorClass}`}>{value}</h2>
    </div>
  );
};

export default StatsCard;
