const ProjectStats = ({ icon, title, value, status }) => {
  return (
    <div className="flex flex-row items-center justify-center glass border gap-2 border-white/10 p-2 rounded-3xl hover:bg-linear-to-r from-violet-600 to-indigo-6000">
      <div>
        <img className="w-22" src={icon} />
      </div>
      <div>
        <p className="text-slate-400 text-sm hover: opacity-80">{title}</p>
        <h2 className="text-3xl font-bold mt-2">{value}</h2>
        <p className="text-slate-400 text-sm hover: opacity-80">{status}</p>
      </div>
    </div>
  );
};

export default ProjectStats;
