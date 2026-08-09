const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Manjunath",
    },
    {
      id: 2,
      name: "Rahul",
    },
  ]);
});

module.exports = router;
