const DateInput = ({label, className, defaultValue, dateClass, ...register}) => {
  return (
    <div className={`w-full ${className || ""}`}>
      <label className="block mb-2 text-sm font-medium text-slate-300">
        {label}
      </label>

      <input 
        type="date" 
        defaultValue={defaultValue}
        className={`w-full px-4 ${dateClass} bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500`}
        {...register}
      />
    </div>
  );
};

export default DateInput;
