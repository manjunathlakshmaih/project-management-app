const TeamMember = require("../models/Teams");

const createTeamMember = async (req, res) => {
  try {
    const member = await TeamMember.create({
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      designation: req.body.designation,
      phoneNo: req.body.phoneNo,
      status: req.body.status,
      profileImage: req.file.path,
    });

    res.status(201).json({
      success: true,
      data: member,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTeamMember = async (req, res) => {
  try {
    const teams = await TeamMember.find();
    const stats = [
      {
        label: "Total Team Members",
        count: teams.length,
      },
      {
        label: "Active Members",
        count: teams.filter((member) => member.status === "Active")
          .length,
      },
      {
        label: "Developers",
        count: teams.filter((member) => member.role === "developer")
          .length,
      },
      {
        label: "Managers",
        count: teams.filter((member) => member.role === "project_manager")
          .length,
      },
    ];
    res.status(200).json({
      success: true,
      data: teams,
      count: stats,
    });
  } catch (error) {
    console.log("get memeber:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTeamMember,
  getTeamMember,
};
