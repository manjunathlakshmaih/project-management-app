require("dotenv").config();
const fs = require('fs');
const useRoutes = require('./routes/taskRoutes');
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api', useRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("Project Management API Running...");
});
fs.readFileSync('')
app.use('/data', (req, res) => {

})

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
