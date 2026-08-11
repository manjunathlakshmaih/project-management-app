export const priorityOptions = () => {
  return [
    { value: "", label: "Select Priority" },
    { value: "High", label: "🔴 High" },
    { value: "Medium", label: "🟡 Medium" },
    { value: "Low", label: "🟢 Low" },
  ];
};

export const statusOptions = () => {
  return [
    { value: "", label: "Select Status" },
    { value: "To Do", label: "🔴 To Do" },
    { value: "Pending", label: "🔴 Pending" },
    { value: "In Progress", label: "🟡 In Progress" },
    { value: "Completed", label: "🟢 Completed" },
  ];
};
