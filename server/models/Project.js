const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["Planning", "Not Started", "In Progress", "Completed", "On Hold"],
      require: true,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low", "Critical"],
      require: true,
    },
    startDate: Date,
    dueDate: Date,
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TeamMember",
      },
    ],
    profileImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Project", projectSchema);
