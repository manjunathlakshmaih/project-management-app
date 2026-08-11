import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TaskInput from "../common/TaskInput";
import DateInput from "../common/DateInput";
import AddTag from "../common/AddTag";
import Textarea from "../common/Textarea";
import SelectInput from "../common/SelectInput";
import { priorityOptions, statusOptions } from "../../utils/DropdownSelection/SelectInputHelper";
import { createTask, getTasks } from "../../services/taskApi";

const NewTask = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      taskTitle: "",
      project: "",
      assignee: "",
      priority: "",
      status: "",
      startDate: "",
      dueDate: "",
      description: "",
      tags: [],
    },
  });

  const [tagList, setTagList] = useState([]);

  const description = watch("description");

  // useEffect(() => {
  //   fetchTasks()
  // }, [])

  // const fetchTasks = async () => {
  //   try {
  //     const data = await getTasks();
  //     console.log("task data:", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleAddTag = (tag) => {
    const normalizedTag = tag.trim();

    if (!normalizedTag) return;

    const updatedTags = [...tagList, normalizedTag];
    setTagList(updatedTags);
    setValue("tags", updatedTags);
  };

  const handleRemoveTag = (indexToRemove) => {
    const updatedTags = tagList.filter((_, index) => index !== indexToRemove);
    setTagList(updatedTags);
    setValue("tags", updatedTags);
  };

  const onSubmit = async (formData) => {
  try {
    const response = await createTask(formData);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="fixed inset-0 z-40">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-3xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-8 w-150.5 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Add New Task</h1>
          {onClose && (
            <button
              onClick={onClose}
              className="text-2xl font-bold cursor-pointer hover:text-gray-600"
            >
              ×
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <TaskInput
            label="Task Title"
            type="text"
            placeholder="Enter task title..."
            {...register("taskTitle", {
              required: "Task title is required",
            })}
          />
          {errors.taskTitle && (
            <span className="text-red-500 text-sm">{errors.taskTitle.message}</span>
          )}

          <div className="flex flex-row gap-10 items-start w-full">
            <TaskInput
              className="flex-1"
              label="Project"
              type="text"
              placeholder="Select Project"
              {...register("project")}
            />
            <TaskInput
              className="flex-1"
              label="Assignee"
              type="text"
              placeholder="Select Assignee"
              {...register("assignee")}
            />
          </div>

          <div className="flex flex-row gap-10 items-start w-full">
            <SelectInput
              isLableReq
              label="Priority"
              type="select"
              className="w-full"
              options={priorityOptions()}
              {...register("priority")}
            />
            <SelectInput
              isLableReq
              label="Status"
              type="select"
              className="w-full"
              options={statusOptions()}
              {...register("status")}
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

          <div>
            <AddTag tags={tagList} addTag={handleAddTag} removeTag={handleRemoveTag} />
          </div>

          <Textarea
            row={2}
            label="Description"
            value={description}
            placeholder="Enter task description..."
            {...register("description")}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded flex w-30"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
