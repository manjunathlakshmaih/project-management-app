const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload");

const {
  createTeamMember,
} = require("../controllers/teamMemberController");

router.post(
  "/create",
  upload.single("profileImage"),
  createTeamMember
);

module.exports = router;