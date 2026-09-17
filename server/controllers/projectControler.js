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

const getProjectData = async (req, res) => {
  try {
    const projectData = await Project.find();
    const projectStats = [
      {
        label: "Total Projects",
        count: projectData.length,
      },
      {
        label: "Active Projects",
        count: projectData.filter((member) => member.status === "Active")
          .length,
      },
      {
        label: "Completed",
        count: projectData.filter((member) => member.status === "Completed")
          .length,
      },
      {
        label: "On Hold",
        count: projectData.filter((member) => member.status === "On Hold")
          .length,
      },
    ];
    console.log(projectStats);
    res.status(200).json({
      success: true,
      projectCount: projectStats,
      projects: projectData,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};

module.exports = { createNewProject, getProjectData };
