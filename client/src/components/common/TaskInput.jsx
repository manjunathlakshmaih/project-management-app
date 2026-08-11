const TaskInput = ({
  label,
  className,
  ...rest
}) => {
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-slate-300 mb-2 block">
        {label}
      </label>
      <input
        {...rest}
        className={`w-full h-12 px-4 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all ${className || ""}`}
      />
    </div>
  );
};

export default TaskInput;
