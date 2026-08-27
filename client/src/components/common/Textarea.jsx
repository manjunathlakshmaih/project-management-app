import Label from "./Label";
const Textarea = ({
  label,
  placeholder,
  defaultValue,
  rows = 2,
  textAreaClass,
  required = false,
  isLableReq,
  ...register
}) => {
  return (
    <div>
      <Label required={required} label={label} isLableReq={isLableReq} />
      <textarea
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={` ${textAreaClass}
      w-full
      px-4
      py-2
      bg-slate-900     
      border
      border-slate-700
      rounded-xl
      text-white
      placeholder:text-slate-500
      resize-none
      focus:outline-none
      focus:ring-2
      focus:ring-violet-500
    `}
        {...register}
      />
    </div>
  );
};

export default Textarea;
