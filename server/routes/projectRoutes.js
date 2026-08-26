const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");
const { createNewProject } = require("../controllers/projectControler");

router.post("/register", upload.single("profileImage"), createNewProject);

module.exports = router;
