require("dotenv").config();
const fs = require("fs");
const createTask = require("./routes/taskRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/tasks", createTask);

app.use("/uploads", express.static("uploads"));

app.use("/api/team-members", require("./routes/teamMemberRoutes"));

app.use("/api/register-project", require("./routes/projectRoutes"));

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
