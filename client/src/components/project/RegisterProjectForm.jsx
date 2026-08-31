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
import { addNewProject } from "../../redux/project/ProjectThunk";

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

  const onSubmit = (data) => {
    const payload = new FormData();

    payload.append("projectName", data.projectName);
    payload.append("description", data.description);
    payload.append("status", data.status);
    payload.append("priority", data.priority);
    payload.append("startDate", data.startDate);
    payload.append("dueDate", data.dueDate);
    payload.append("profileImage", data.profileImage);

    try {
      dispatch(addNewProject(payload));
    } catch (error) {
      console.log(error);
    }
  };

  const handleMemberDropdownOpen = async () => {
    try {
      const result = await dispatch(fetchTeamMembers()).unwrap();
      const options = result?.data?.map((member) => ({
        label: member.fullName,
        value: member.id,
      }));
      setMemberOptions(options || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full px-10 py-8">
      <div className="flex flex-row justify-between mt-5 mb-10">
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-2xl font-bold">Add New Project</h2>
          <p className="text-base text-slate-700 font-medium">
            Create a new project and get started
          </p>
        </div>
        <button
          type="button"
          onClick={onClickBack}
          className="text-lg text-purple-600 pr-4"
        >
          &larr; Back to Project
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-row gap-20 items-start w-full">
          <div className="w-full">
            <Input
              label="Project Name"
              placeholder="Enter project name"
              className="w-full max-w-3xl h-12 mb-1"
              type="text"
              isLableReq={true}
              required={true}
              {...register("projectName")}
            />
            <Textarea
              rows={4}
              label="Description"
              required={true}
              isLableReq={true}
              placeholder="Enter Project description..."
              textAreaClass="bg-slate-800"
              {...register("description")}
            />
            <div className="flex gap-5 w-full ">
              <SelectInput
                isLableReq={true}
                label="Status"
                required={true}
                selectClass="flex-1"
                selectInputClass="flex-1 w-full max-w-3xl h-12 mb-1"
                options={projectStatusOptions()}
                {...register("status")}
              />
              <SelectInput
                isLableReq={true}
                label="Priority"
                required={true}
                selectClass="flex-1"
                selectInputClass="flex-1 w-full max-w-3xl h-12 mb-1"
                options={priorityOptions()}
                {...register("priority")}
              />
            </div>
            <div className="flex flex-row gap-5 items-start w-full">
              <DateInput
                dateClass="flex-1 mb-1 h-12"
                required={true}
                isLableReq={true}
                label="Start Date"
                {...register("startDate")}
              />
              <DateInput
                label="Due date"
                required={true}
                isLableReq={true}
                dateClass="flex-1 mb-1 h-12"
                {...register("dueDate")}
              />
            </div>
            <SelectInput
              isLableReq={true}
              label="Project Members"
              selectInputClass="w-130 h-12"
              required={true}
              options={memberOptions}
              onFocus={handleMemberDropdownOpen}
            />
          </div>
          <div className="w-full">
            <DragAndDrop
              name="profileImage"
              label="Profile Image"
              isLableReq={true}
              accept=".png,.jpg,.jpeg"
              allowedTypes={["image/png", "image/jpeg"]}
              maxSize={2}
              className="w-full max-w-sm h-80"
              onFileSelect={(file) => console.log(file)}
              setValue={setValue}
              {...register("profileImage")}
            />
          </div>
        </div>
        <div>
          <div className="w-165 flex flex-row justify-end gap-5 mt-10">
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
