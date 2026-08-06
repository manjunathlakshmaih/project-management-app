import search from "../../assets/search.svg";
const Input = ({ type, placeholder, value, onChange, className, isSearch = false }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
