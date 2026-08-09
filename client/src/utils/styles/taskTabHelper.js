export const getPriorityPointClasses = (status) => {
  if (status === "High") return "bg-red-600";
  if (status === "Medium") return "bg-orange-600";
  if (status === "Review") return "bg-yellow-600";
  if (status === "Low") return "bg-green-600";
  if (status === "In Progress") return "bg-blue-600";
  return "bg-slate-400";
};

export const getWorkProgressClasses = (status) => {
  if (status === "High") return "text-red-600";
  if (status === "Medium") return "text-orange-600";
  if (status === "Review") return "text-yellow-600";
  if (status === "Low") return "text-green-600";
  if (status === "In Progress") return "text-slate-500";
  return "text-slate-400";
};

export const taskFilters = ["All", "To Do", "In Progress", "Review", "Done"];

export const getDesignationClasses = (designation) => {
  if (designation === "Owner")
    return "bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)] ";
  if (designation === "Developer")
    return "bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]";
  if (designation === "Designer")
    return "bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]";
  if (designation === "QA")
    return "py[0_0_20px_rgba(-2 rounded-full bg-amber-500/10 text-amber-400 border 0/20 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)]";
  return "bg-slate-800/80 text-slate-300 border border-slate-700 backdrop-blur-md font-medium shadow-sm";
};
