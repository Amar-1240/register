const express = require("express");
const path = require("path");
const app = express();

// Command-line arguments for port
const args = require("minimist")(process.argv.slice(2));
const PORT = args.port || 3000; // Default port 3000

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the projects page
app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "project.html"));
});

// Route to serve the registration page
app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "registration.html"));
});

// Default home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
