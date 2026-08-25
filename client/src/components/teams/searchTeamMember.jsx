import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import {
  roleOptions,
  statusOptions,
} from "../../utils/DropdownSelection/TeamOptions";
import { sortOptions } from "../../utils/DropdownSelection/teamSearchOptions";
import { FiRefreshCw } from "react-icons/fi";

const SearchTeamMember = ({ filters, onFilterChange, onReset, searchTeam }) => {
  return (
    <div className="flex flex-row items-center gap-3 mb-7">
      <Input
        placeholder="Search team members..."
        isSearch={true}
        className="w-80 pl-10"
        iconClass="left-2 top-3"
        value={filters.search}
        search={searchTeam}
        onChange={(e) => onFilterChange("search", e.target.value)}
      />
      <SelectInput
        selectInputClass="w-40"
        options={roleOptions}
        value={filters.role}
        onChange={(e) => onFilterChange("role", e.target.value)}
      />
      <SelectInput
        selectInputClass="w-35"
        options={statusOptions}
        value={filters.status}
        onChange={(e) => onFilterChange("status", e.target.value)}
      />
      <SelectInput
        options={sortOptions}
        value={filters.sortBy}
        selectInputClass="w-35"
        onChange={(e) => onFilterChange("sortBy", e.target.value)}
      />
      <button
        className="h-11 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none flex items-center cursor-pointer text-base gap-2"
        onClick={onReset}
      >
       <FiRefreshCw size={18} /> Clear
      </button>
    </div>
  );
};

export default SearchTeamMember;
