const Project = require("../models/Project");

const createNewProject = async (req, res) => {
  try {
    const projectData = {
      projectName: req.body.projectName,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      startDate: req.body.startDate,
      dueDate: req.body.dueDate,
      members: req.body.members || req.body.member || [],
    };

    if (req.file && req.file.path) {
      projectData.profileImage = req.file.path;
    }

    const projectDetail = await Project.create(projectData);

    return res.status(201).json({
      success: true,
      data: projectDetail,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createNewProject };