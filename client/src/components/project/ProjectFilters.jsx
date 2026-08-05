import { useState } from "react";
import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import filter from "../../assets/filter.svg";

const ProjectFilters = ({className}) => {
  const [searchProjects, setSearchProjects] = useState("");

  return (
    <form className={`flex flex-row w-full items-center justify-between mb-9 md:flex-wrap ${className}`}>
      <div className="flex flex-row gap-7 md:gap-5">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchProjects}
          onChange={(e) => setSearchProjects(e.target.value)}
          className="w-full min-w-60 h-14 md:min-w-50 md:h-10"
          isSearch
        />
        <SelectInput
          className="w-full min-w-30 md:h-10"
          optionClassName="md:text-xs"
          options={[
            { value: "", label: "Status:" },
            { value: "All", label: "All" },
            { value: "Active", label: "Active Projects" },
            { value: "Inprogress", label: "Inprogress" },
            { value: "Completed", label: "Completed" },
            { value: "Onhold", label: "On Hold" },
          ]}
        />
        <SelectInput
          className="w-full min-w-30 md:h-10"
          options={[
            { value: "", label: "Priority:" },
            { value: "All", label: "All" },
            { value: "Active", label: "High" },
            { value: "Inprogress", label: "Medium" },
            { value: "Completed", label: "Low" },
          ]}
        />
        <SelectInput
          className="w-full min-w-30 md:h-10"
          options={[
            { value: "", label: "Sort by:" },
            { value: "Newest", label: "Newest" },
          ]}
        />
      </div>
      <div className="flex flex-row items-center justify-center h-14 px-4 bg-slate-800 border border-slate-700 text-white p-3 gap-3 rounded-2xl md:px-1 md:h-10">
        <img className ="md:w-5 md:h-10" src={filter} alt="filter" />
        <div className="md:hidden">Filter</div>
      </div>
    </form>
  );
};

export default ProjectFilters;
