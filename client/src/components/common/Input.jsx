import search from "../../assets/search.svg";
const Input = ({ label, className, isSearch = false, ...props }) => {
  return (
    <div className="relative">
      {label && (
        <label className="text-sm font-semibold text-slate-300 mb-2 block">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`${className || ""} bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none md:placeholder:text-sm lg:placeholder:text-base`}
      />
      {isSearch && (
        <span className="absolute lg:top-4 lg:right-3 md:top-3">
          <img className="lg:w-6 md:w-4.5" src={search} alt="search" />
        </span>
      )}
    </ div>
  );
};

export default Input;
