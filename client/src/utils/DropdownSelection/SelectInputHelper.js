export const priorityOptions = () => {
  return [
    { value: "", label: "Select Priority" },
    { value: "High", label: "🔴 High" },
    { value: "Medium", label: "🟡 Medium" },
    { value: "Low", label: "🟢 Low" },
    { value: "Critical", label: "🟢 Critical" },
  ];
};

export const projectStatusOptions = () => {
  return [
    { value: "", label: "Select Status" },
    { value: "Planning", label: "Planning" },
    { value: "Not Started", label: "Not Started" },
    { value: "In Progress", label: "In Progress" },
    { value: "Completed", label: "Completed" },
    { value: "On Hold", label: "On Hold" },
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
