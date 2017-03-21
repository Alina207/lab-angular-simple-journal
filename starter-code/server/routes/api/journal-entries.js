const express       = require('express');
const router        = express.Router();

// const mongoose = require("mongoose");
const JournalEntry = require("../../models/journal-entry.js");

router.get("/journal-entries", (req, res, next) => {
  JournalEntry.find( (err, result) => {
    if (err)
    res.json(err);
    res.json(result);
  });
});

router.get("/journal-entries/:id", (req, res, next) => {
  const entryId = req.params.id;

  JournalEntry.findById(entryId, (err, result) => {
    if (err)
    res.json(err);
    res.json(result);
  });
});


module.exports = router;
