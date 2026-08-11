const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    assignee: String,
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
    },
    status: {
      type: String,
      enum: ["To Do", "Pending", "In Progress", "Completed"],
    },
    startDate: Date,
    dueDate: Date,
    tags: [String],
    description: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Task", taskSchema);
