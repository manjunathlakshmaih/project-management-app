const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
    },
    profileImage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("TeamMember", teamMemberSchema);
