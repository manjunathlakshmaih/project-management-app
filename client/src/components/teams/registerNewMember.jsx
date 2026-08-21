import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import MemberIcon from "../../assets/teams/membeIcon.svg";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import SelectInput from "../common/SelectInput";
import {
  roleOptions,
  designationOptions,
  statusOptions,
} from "../../utils/DropdownSelection/TeamOptions";
import DragAndDrop from "../common/dragDrop";
import { createTeamMember } from "../../services/teamApi";
import { addTeamMember, fetchTeamMembers } from "../../redux/teams/TeamThunk";

const RegisterNewMember = ({ handleClose }) => {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      designation: "",
      phoneNo: "",
      profileImage: null,
      status: "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("role", data.role);
    formData.append("designation", data.designation);
    formData.append("phoneNo", data.phoneNo);
    formData.append("status", data.status);

    formData.append("profileImage", data.profileImage);

    try {
      await dispatch(addTeamMember(formData)).unwrap();
      reset();
      dispatch(fetchTeamMembers());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-800/10 border border-slate-200/10 rounded-xl w-full min-w-50 max-w-100 p-3.5 mt-2 mr-2 mb-2">
      <div className="flex items-start justify-between mb-10">
        <div className="flex flex-row items-center gap-2">
          <span>
            <img className="w-12" src={MemberIcon} alt="MemberIcon" />
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Add Team Member</h1>
            <p className="text-sm text-slate-600">Create a new team member</p>
          </div>
        </div>
        <div>
          <button onClick={handleClose}>&#x2716;</button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Full Name"
          type="text"
          className="w-full mb-2"
          placeholder="Enter full name"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
        <Input
          label="Email Address"
          type="email"
          className="w-full mb-2"
          placeholder="Enter email address"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <SelectInput
          label="Role"
          type="select"
          isLableReq
          className="w-full mb-2"
          options={roleOptions}
          {...register("role", {
            onChange: (e) => setRole(e.target.value),
          })}
        />
        <SelectInput
          label="Designation"
          className="w-full mb-2"
          isLableReq
          options={designationOptions[role] || []}
          {...register("designation")}
        />
        <Input
          label="Phone Number"
          type="number"
          className="w-full mb-2"
          placeholder="Enter phone number"
          {...register("phoneNo")}
        />
        <DragAndDrop
          name="profileImage"
          label="Profile Image"
          accept=".png,.jpg,.jpeg"
          allowedTypes={["image/png", "image/jpeg"]}
          maxSize={2}
          onFileSelect={(file) => console.log(file)}
          setValue={setValue}
          {...register("profileImage")}
        />
        <SelectInput
          label="Status"
          type="select"
          isLableReq
          className="w-full mb-2"
          options={statusOptions}
          {...register("status")}
        />
        <div className="flex flex-row justify-end gap-5 mt-6 ">
          <button
            className="bg-slate-800 px-4 py-2 rounded-lg"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-linear-to-r from-violet-400 to-indigo-500 px-4 py-2 rounded-lg"
            type="submit"
          >
            Create Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterNewMember;
