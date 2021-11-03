const notes = require("express").Router();
const fs = require("fs");
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

notes.get("/api/notes", (req, res) => {
  console.info(`${req.method} request received to get notes`);
  return res.json(db);
});

notes.post("/api/notes", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  const { title, text } = req.body;

  if (!title && text) {
    res.status(500).json("Error in posting note");
  } else {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    const noteString = JSON.stringify(newNote);

    // fs.writeFile("..")
  }
});

// notes.get("api/notes/:title", (req, res) => {
//   const title = req.params.title;
// });

module.exports = notes;
