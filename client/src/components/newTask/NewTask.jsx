import React, { useState } from "react";
import TaskInput from "../common/TaskInput";
import DateInput from "../common/DateInput";
import AddTag from "../common/AddTag";
import Textarea from "../common/Textarea";

const NewTask = ({ onClose }) => {
  const [description, setDescription] = useState("");
  return (
    <div className="fixed inset-0 z-40">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-3xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-8 w-187.5 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-white">Add New Task</h1>
          {onClose && (
            <button
              onClick={onClose}
              className="text-2xl font-bold cursor-pointer hover:text-gray-600"
            >
              ×
            </button>
          )}
        </div>
        <form className="flex flex-col gap-3">
          <TaskInput
            label="Task Title"
            type="text"
            placeholder="Enter task title..."
          />
          <div className="flex flex-row gap-10 items-start w-full">
            <TaskInput
              className="flex-1"
              label="Project"
              type="text"
              placeholder="Select Project"
            />
            <TaskInput className="flex-1" label="Assignee" />
          </div>
          <div className="flex flex-row gap-10 items-start w-full">
            <TaskInput
              label="Priority"
              type="select"
              Ifselect
              options={[
                { value: "", label: "Select Priority" },
                { value: "High", label: "🔴 High" },
                { value: "medium", label: "🟡 Medium" },
                { value: "low", label: "🟢 Low" },
              ]}
            />
            <TaskInput
              label="Priority"
              type="select"
              Ifselect
              options={[
                { value: "", label: "Select Status" },
                { value: "High", label: "🔴 To Do" },
                { value: "medium", label: "🟡 In Progress" },
                { value: "low", label: "🟢 Completed" },
              ]}
            />
          </div>
          <div className="flex flex-row gap-10 items-start w-full">
            <DateInput className="flex-1" label="Start Date" />
            <DateInput className="flex-1" label="Due date" />
          </div>
          <div>
            <AddTag />
          </div>
          <Textarea
            row={2}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
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
