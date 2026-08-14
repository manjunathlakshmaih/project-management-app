const teamStats = ({ statsSummary }) => {
  console.log(statsSummary)
  
  return (
    <div className="flex flex-row justify-between flex-wrap border border-slate-800 bg-slate-800 rounded-2xl">
      {statsSummary.map((stats, id) => (
        <div key={id} className="flex flex-row justify-between">
          <div>
            <img src={stats.icon} alt="Icon" />
          </div>
          <div className="flex flex-col gap-2.5">
            <h3>{stats.title}</h3>
            <span>{stats.members}</span>
            <p>{stats.memberStatus}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default teamStats;
