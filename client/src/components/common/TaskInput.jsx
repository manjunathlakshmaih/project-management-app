const TaskInput = ({
  label,
  type,
  placeholder,
  className,
  Ifselect,
  options = [],
}) => {
  const renderOptions = () => {
    if (!Array.isArray(options)) return null;

    return options.map((option, index) => {
      if (typeof option === "string") {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      }

      return (
        <option key={option.value ?? index} value={option.value ?? ""}>
          {option.label ?? option.value ?? ""}
        </option>
      );
    });
  };

  return (
    <div className={`w-full ${className || ""}`}>
      <label className="text-sm font-semibold text-slate-300 mb-2 block">
        {label}
      </label>
      {!Ifselect ? (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full h-14 px-4 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
        />
      ) : (
        <div>
          <select className="w-full h-14 px-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500">
            {renderOptions()}
          </select>
        </div>
      )}
    </div>
  );
};

export default TaskInput;
