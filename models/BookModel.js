const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres: {Array, default: []},
  rating: Number,
});

const Book = mongoose.model("Book", bookSchema);

