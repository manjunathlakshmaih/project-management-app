const Label = ({ required, isLableReq = false, label }) => {
  return (
    <div className="flex gap-0.5">
      {isLableReq && (
        <label className="text-sm font-semibold text-slate-300">{label}</label>
      )}
      {required && <span className="text-xl text-red-900 ">*</span>}
    </div>
  );
};

export default Label;
