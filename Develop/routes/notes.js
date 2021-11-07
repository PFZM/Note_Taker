const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");

// GET route for retrieving all the notes
notes.get("/api/notes", (req, res) => {
  console.info(`${req.method} request received to get notes`);
  readFromFile("./db/db.json")
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((error) => console.error(error));
});

// POST route for submitting a note
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

    readAndAppend(newNote, "./db/db.json");
  }
});

// DELETE route for a specific note
notes.delete("/api/notes/:note_id", (req, res) => {
  console.info(`${req.method} request received to delete a note`);
  const noteID = req.params.note_id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((notesData) => {
      const result = notesData.filter((note) => note.note_id !== noteID);
      writeToFile("./db/db.json", result);
      res.json(`item ${noteID} has been deleted`);
    })
    .catch((error) => console.error(error));
});

module.exports = notes;
