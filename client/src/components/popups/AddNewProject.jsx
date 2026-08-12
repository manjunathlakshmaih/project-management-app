import { useForm } from "react-hook-form";
import ProjectIcon from "../../assets/project.svg";
import TaskInput from "../common/TaskInput";
import SelectInput from "../common/SelectInput";
const AddNewForm = () => {
  return (
    <div>
      <div>
        <div>
          <span>
            <img src={ProjectIcon} alt="ProjectIcon" />
          </span>
          <div>
            <h1>New Project</h1>
            <p>Create a new project to started</p>
          </div>
        </div>
        <form>
            <TaskInput label="Project Name" placeholder="Enter projectName..." />
            <SelectInput />
        </form>
      </div>
    </div>
  );
};

export default AddNewForm;