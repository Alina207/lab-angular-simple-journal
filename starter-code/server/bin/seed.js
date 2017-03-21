const mongoose     = require('mongoose');

const JournalEntry = require('../models/journal-entry.js');

mongoose.connect('mongodb://localhost/journal-development'); // connect to db

const entries = [
  {
    title: "Lorem Impsum 1",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 2",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 3",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 4",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 5",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 6",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 7",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 8",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 9",
    content: "Thing String"
  },
  {
    title: "Lorem Impsum 10",
    content: "Thing String"
  },
];

JournalEntry.create(entries, (err) => {
  if (err)
  console.log(err);

  mongoose.disconnect();
});


// after seed file created run  node bin/seed.js in terminal
// then check db if the array is there
