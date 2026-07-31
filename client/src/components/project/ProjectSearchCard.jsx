import { useState } from "react";
import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import filter from "../../assets/filter.svg";

const ProjectSearchCard = () => {
  const [searchProjects, setSearchProjects] = useState("");

  return (
    <form className="flex flex-row w-full items-center justify-between">
      <div className="flex flex-row gap-7 items-start">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchProjects}
          onChange={(e) => setSearchProjects(e.target.value)}
          className="w-sm h-14"
          isSearch
        />
        <SelectInput
          className="w-50"
          options={[
            { value: "", label: "Status:" },
            { value: "Active", label: "Active Projects" },
            { value: "Inprogress", label: "Inprogress" },
            { value: "Completed", label: "Completed" },
            { value: "Onhold", label: "On Hold" },
            { value: "All", label: "All" },
          ]}
        />
        <SelectInput
          className="w-50"
          options={[
            { value: "", label: "Priority:" },
            { value: "High", label: "High" },
            { value: "medium", label: "Medium" },
            { value: "low", label: "Low" },
            { value: "All", label: "All" },
          ]}
        />
        <SelectInput
          className="w-50"
          options={[
            { value: "", label: "Sort by:" },
            { value: "Newest", label: "Newest" },
          ]}
        />
      </div>
      <div className="flex flex-row items-center justify-center h-14 px-4 bg-slate-800 border border-slate-700 text-white p-3 gap-3 rounded-2xl">
        <img src={filter} alt="filter" />
        <smpn> Folter</smpn>
      </div>
    </form>
  );
};

export default ProjectSearchCard;
