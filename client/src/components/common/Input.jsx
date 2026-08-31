import search from "../../assets/search.svg";
import Label from "./Label";
const Input = ({
  label,
  className,
  isSearch = false,
  iconClass,
  Search,
  required = false,
  isLableReq,
  ...props
}) => {
  // Remove 'search' prop if it exists to prevent React warning
  const { search: searchProp, ...inputProps } = props;

  return (
    <div className="relative">
      <Label required={required} label={label} isLableReq={isLableReq} />
      <input
        {...inputProps}
        className={`${className || ""} bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none md:placeholder:text-sm lg:placeholder:text-base mb-1`}
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
