import downarrow from "../../assets/downarrow.svg";
const SelectInput = ({
  label,
  className,
  options = [],
  isLableReq = false,
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
    <div className="w-full">
      {isLableReq && (
        <label className="text-sm font-semibold text-slate-300 mb-2 block">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`${className || ""} h-14 px-3 appearance-none bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500`}
        >
          {renderOptions()}
        </select>
        <span className="absolute top-4.5 right-3">
          <img src={downarrow} alt="Select" />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
