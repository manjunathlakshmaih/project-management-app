import search from "../../assets/search.svg";
const Input = ({
  label,
  className,
  isSearch = false,
  iconClass,
  Search,
  required = false,
  ...props
}) => {
  // Remove 'search' prop if it exists to prevent React warning
  const { search: searchProp, ...inputProps } = props;

  return (
    <div className="relative">
      <div className="relative w-fit">
        {label && (
          <label className="text-sm font-semibold text-slate-300 mb-2 pr-2.5 block">
            {label}
          </label>
        )}
        {required && <span className="text-xl text-red-900 right-0 top-0 absolute ">*</span>}
      </div>
      <input
        {...inputProps}
        className={`${className || ""} bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none md:placeholder:text-sm lg:placeholder:text-base`}
      />
      {isSearch && (
        <span
          className={`absolute ${iconClass} cursor-pointer`}
          onClick={Search}
        >
          <img className="lg:w-6 md:w-4.5" src={search} alt="search" />
        </span>
      )}
    </div>
  );
};

export default Input;
