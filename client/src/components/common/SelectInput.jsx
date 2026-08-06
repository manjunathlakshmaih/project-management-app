import downarrow from "../../assets/downarrow.svg";
const SelectInput = ({
  label,
  className,
  options = [],
  isLableReq = false,
  defaultvalue,
  optionClassName
}) => {
  const renderOptions = () => {
    if (!Array.isArray(options)) return null;

    return options.map((option, index) => {
      if (typeof option === "string") {
        return (
          <option key={index} value={option} className={`${optionClassName} lg:text-base md:text-sm`}>
            {option}
          </option>
        );
      }

      return (
        <option key={option.value ?? index} value={option.value ?? ""} className={`${optionClassName} lg:text-base md:text-sm`}>
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
          className={`${className || ""} h-14 px-3 appearance-none bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 md:text-sm md:w-30`}
        >
          {renderOptions()}
        </select>
        <span className="absolute lg:top-4 lg:right-1 md:top-3 md:right-5.5">
          <img className="lg:w-6 md:w-4.5" src={downarrow} alt="Select" />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
