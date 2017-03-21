const mongoose     = require('mongoose'); // connects to file

const Schema = mongoose.Schema; // require model

const journalEntrySchema = new mongoose.Schema({
  date: {type: Date, default: Date.now},
  title: String,
  content: String,
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

module.exports = JournalEntry;
