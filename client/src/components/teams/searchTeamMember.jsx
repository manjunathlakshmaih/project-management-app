import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import { roleOptions, statusOptions } from "../../utils/DropdownSelection/TeamOptions";
import { sortOptions } from "../../utils/DropdownSelection/teamSearchOptions";

const SearchTeamMember = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-row gap-3 mb-7">
      <Input
        placeholder="Search team members..."
        isSearch={true}
        className="w-80"
        value={filters.search}
        onChange={(e) => onFilterChange("search", e.target.value)}
      />
      <SelectInput
        selectInputClass="w-40"
        options={roleOptions}
        value={filters.role}
        onChange={(e) => onFilterChange("role", e.target.value)}
      />
      <SelectInput
        selectInputClass="w-30"
        options={statusOptions}
        value={filters.status}
        onChange={(e) => onFilterChange("status", e.target.value)}
      />
      <SelectInput
        options={sortOptions}
        value={filters.sortBy}
        onChange={(e) => onFilterChange("sortBy", e.target.value)}
      />
    </div>
  );
};

export default SearchTeamMember;
