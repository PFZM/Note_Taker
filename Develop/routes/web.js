const webRoutes = require("express").Router();
const path = require("path");

webRoutes.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/index.html"));
});

webRoutes.get("/notes", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/notes.html"));
});

// webRoutes.get("*", (req, res) => {
//   res.sendFile(path.join(process.cwd(), "public/index.html"));
// });

module.exports = webRoutes;
