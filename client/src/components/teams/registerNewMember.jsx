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
    <div className="fixed p-5 w-150 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl ">
      <div className="flex items-start justify-between mb-6">
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
          <button className="cursor-pointer" onClick={handleClose}>
            &#x2716;
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Full Name"
          type="text"
          required={true}
          className="w-full mb-2 h-12"
          isLableReq={true}
          placeholder="Enter full name"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
        <Input
          label="Email Address"
          type="email"
          required={true}
          className="w-full mb-2 h-12"
          isLableReq={true}
          placeholder="Enter email address"
          {...register("email", {
            required: "Email is required",
          })}
        />
        <div className="flex gap-5 w-full ">
          <SelectInput
            label="Role"
            type="select"
            required={true}
            isLableReq={true}
            selectClass="flex-1"
            selectInputClass="flex-1 w-full max-w-3xl h-12 mb-1"
            options={roleOptions}
            {...register("role", {
              onChange: (e) => setRole(e.target.value),
            })}
          />
          <SelectInput
            label="Designation"
            selectInputClass="flex-1 w-full max-w-3xl h-12 mb-1"
            required={true}
            isLableReq={true}
            selectClass="flex-1"
            options={designationOptions[role] || []}
            {...register("designation")}
          />
        </div>
        <div className="flex w-full gap-5">
          <Input
            label="Phone Number"
            type="number"
            required={true}
            isLableReq={true}
            className="flex-3 w-68 max-w-3xl h-12 mb-1"
            placeholder="Enter phone number"
            {...register("phoneNo")}
          />
          <SelectInput
            label="Status"
            type="select"
            required={true}
            isLableReq={true}
            selectInputClass="flex-1 w-full max-w-3xl h-12 mb-1"
            selectClass="flex-1"
            options={statusOptions}
            {...register("status")}
          />
        </div>
        <DragAndDrop
          name="profileImage"
          label="Profile Image"
          isLableReq={true}
          className="w-full"
          accept=".png,.jpg,.jpeg"
          allowedTypes={["image/png", "image/jpeg"]}
          maxSize={2}
          onFileSelect={(file) => console.log(file)}
          setValue={setValue}
          {...register("profileImage")}
        />
        <div className="flex flex-row justify-end gap-5 mt-3 ">
          <button
            className="bg-slate-800 px-4 py-2 rounded-lg cursor-pointer"
            type="button"
            onClick={handleClose}
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
      </form>
    </div>
  );
};

export default RegisterNewMember;
