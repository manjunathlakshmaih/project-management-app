const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload");

const {
  createTeamMember,
  getTeamMember,
} = require("../controllers/teamMemberController");

router.post(
  "/create",
  upload.single("profileImage"),
  createTeamMember
);

router.get('/get-team-data', getTeamMember);

module.exports = router;