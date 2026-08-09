export const getPriorityBadgeClasses = (priority) => {
  if (priority === "High")
    return "bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]";
  if (priority === "Medium")
    return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]";
  if (priority === "Low")
    return "bg-green-500/10 text-green-400 border border-green-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]";
  return "";
};

export const getPriorityDotClasses = (priority) => {
  if (priority === "High") return "bg-red-500";
  if (priority === "Medium") return "bg-yellow-500";
  if (priority === "Low") return "bg-green-500";
  return "";
};
