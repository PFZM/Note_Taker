const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  writeToFile,
  appendToFile,
} = require("../helpers/fsUtils");

notes.get("/api/notes", (req, res) => {
  console.info(`${req.method} request received to get notes`);
  readFromFile("./db/db.json")
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((error) => console.error(error));
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
    appendToFile("./db/db.json", newNote);
  }
});

// notes.get("api/notes/:title", (req, res) => {
//   const title = req.params.title;
// });

module.exports = notes;
