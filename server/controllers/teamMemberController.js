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

module.exports = {
  createTeamMember,
};