const express = require("express");

const PORT = process.env.PORT || 3001;
const apiNotes = require("./routes/notes");
const webRoutes = require("./routes/web");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(apiNotes);
app.use(webRoutes);

app.listen(PORT, () => {
  console.log("app is running on http://localhost:" + PORT);
});
