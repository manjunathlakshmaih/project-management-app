const Textarea = ({label, placeholder}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-slate-300">
        {label}
      </label>

      <textarea
        rows={3}
        placeholder={placeholder}
        className="
      w-full
      p-4
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      text-white
      placeholder:text-slate-500
      resize-none
      focus:outline-none
      focus:ring-2
      focus:ring-violet-500
    "
      />
    </div>
  );
};

export default Textarea;
