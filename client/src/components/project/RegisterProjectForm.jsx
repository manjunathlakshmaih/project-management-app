import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import Textarea from "../common/Textarea";
import DateInput from "../common/DateInput";
import {
  priorityOptions,
  projectStatusOptions,
} from "../../utils/DropdownSelection/SelectInputHelper";
import DragAndDrop from "../common/dragDrop";
import { fetchTeamMembers } from "../../redux/teams/TeamThunk";

const RegisterProject = ({ onClickBack }) => {
  const dispatch = useDispatch();
  const [memberOptions, setMemberOptions] = useState();
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

  const handleMemberDropdownOpen = async () => {
    try {
      const result = await dispatch(fetchTeamMembers()).unwrap();
      const options = result?.data?.map((member) => ({
        label: member.fullName,
        value: member.id
      }));
      setMemberOptions(options || []);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full px-10 py-8">
      <div className="flex flex-row justify-between mb-5">
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-lg font-bold">Add New Project</h2>
          <p className="text-sm text-slate-700 font-medium">
            Create a new project and get started
          </p>
        </div>
        <button
          type="button"
          onClick={onClickBack}
          className="text-base text-purple-600"
        >
          Back to Project
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-20 items-center w-full">
          <div>
            <Input
              label="Project Name"
              placeholder="Enter project name"
              className="w-full h-10 mb-1"
              type="text"
              {...register("projectName")}
            />
            <Textarea
              row={2}
              label="Description"
              placeholder="Enter Project description..."
              {...register("description")}
            />
            <div className="flex justify-between w-full">
              <SelectInput
                isLableReq={true}
                label="Status"
                selectInputClass="w-60 h-10"
                options={projectStatusOptions()}
                {...register("status")}
              />
              <SelectInput
                isLableReq={true}
                label="Priority"
                selectInputClass="w-60 h-10 mb-1"
                options={priorityOptions()}
                {...register("priority")}
              />
            </div>
            <div className="flex flex-row gap-10 items-start w-full">
              <DateInput
                className="flex-1 mb-1"
                label="Start Date"
                {...register("startDate")}
              />
              <DateInput
                className="flex-1"
                label="Due date"
                {...register("dueDate")}
              />
            </div>
            <SelectInput
              isLableReq={true}
              label="Project Members"
              selectInputClass="w-130 h-10"
              options={memberOptions}
              onFocus={handleMemberDropdownOpen}
            />
          </div>
          <div>
            <DragAndDrop
              name="profileImage"
              label="Profile Image"
              accept=".png,.jpg,.jpeg"
              allowedTypes={["image/png", "image/jpeg"]}
              maxSize={2}
              className="w-100 h-80"
              onFileSelect={(file) => console.log(file)}
              setValue={setValue}
              {...register("profileImage")}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-end gap-5 mt-3 ">
            <button
              className="bg-slate-800 px-4 py-2 rounded-lg cursor-pointer"
              type="button"
              onClick={onClickBack}
            >
              Cancel
            </button>
            <button
              className="bg-linear-to-r from-violet-400 to-indigo-500 px-4 py-2 rounded-lg cursor-pointer"
              type="submit"
            >
              Create Member
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterProject;
