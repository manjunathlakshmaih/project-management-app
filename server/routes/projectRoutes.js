const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");
const { createNewProject, getProjectData } = require("../controllers/projectControler");

router.post("/register", upload.single("profileImage"), createNewProject);
router.get("/project-data", getProjectData);

module.exports = router;
