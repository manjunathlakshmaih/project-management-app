import downarrow from "../../assets/downarrow.svg";

const SelectInput = ({
  label,
  selectInputClass,
  options = [],
  isLableReq = false,
  defaultValue,
  optionClassName,
  dropIconClassName,
  ...register
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
    <div>
      {isLableReq && (
        <label className="text-sm font-semibold text-slate-300 mb-2 block">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          defaultValue={defaultValue}
          className={`${selectInputClass || ""} relative pl-3 pr-10 appearance-none bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 md:text-sm cursor-pointer`}
          {...register}
        >
          {renderOptions()}
        </select>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none select-none">
          <img className="w-5 h-5" src={downarrow} alt="Select" />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;