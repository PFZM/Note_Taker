const express = require("express");
const router = express.Router();

router.get("api/notes/:title", (req, res) => {
  const title = req.params.title;
});

module.exports = router;
