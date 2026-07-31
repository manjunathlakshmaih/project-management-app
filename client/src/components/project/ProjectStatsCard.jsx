const ProjectStatsCard = ({ icon, title, value, status }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-8 glass border border-white/10 p-6 rounded-3xl hover:bg-linear-to-r from-violet-600 to-indigo-6000">
      <div>
        <img className="w-25" src={icon} />
      </div>
      <div>
        <p className="text-slate-400 hover: opacity-80">{title}</p>
        <h2 className="text-4xl font-bold mt-2">{value}</h2>
        <p className="text-slate-400 hover: opacity-80">{status}</p>
      </div>
    </div>
  );
};

export default ProjectStatsCard;
