const webRoutes = require("express").Router();
const path = require("path");

// GET route for homepage
webRoutes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET route for notes page
webRoutes.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// wildcard route to direct users to homepage
webRoutes.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = webRoutes;
