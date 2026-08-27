import Label from "./Label";

const DateInput = ({
  label,
  className,
  defaultValue,
  dateClass,
  required,
  isLableReq,
  ...register
}) => {
  return (
    <div className={`w-full ${className || ""}`}>
      <Label required={required} label={label} isLableReq={isLableReq} />
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
