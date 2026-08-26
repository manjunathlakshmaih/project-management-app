import { useForm } from "react-hook-form";
import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import Textarea from "../common/Textarea";
import DateInput from "../common/DateInput";
import {
  priorityOptions,
  projectStatusOptions,
} from "../../utils/DropdownSelection/SelectInputHelper";
const RegisterProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      projectName: "",
      description: "",
      status: "",
      priority: "",
      startDate: "",
      dueDate: "",
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-lg font-bold">Add New Project</h2>
          <p className="text-sm text-slate-700 font-medium">
            Create a new project and get started
          </p>
        </div>
        <button className="text-base text-purple-600">Back to Project</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Project Name"
            placeholder="Enter project name"
            type="text"
            {...register("projectName")}
          />
          <Textarea
            row={2}
            label="Description"
            placeholder="Enter Project description..."
            {...register("description")}
          />
          <div>
            <SelectInput
              isLableReq={true}
              label="Status"
              options={projectStatusOptions}
              {...register("status")}
            />
            <SelectInput
              isLableReq={true}
              label="Priority"
              options={priorityOptions}
              {...register("priority")}
            />
          </div>
          <div className="flex flex-row gap-10 items-start w-full">
            <DateInput
              className="flex-1"
              label="Start Date"
              {...register("startDate")}
            />
            <DateInput
              className="flex-1"
              label="Due date"
              {...register("dueDate")}
            />
          </div>
          <SelectInput isLableReq={true} label="Project Members" />
        </div>
      </form>
    </div>
  );
};

export default RegisterProject;
