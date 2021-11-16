const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String },
  genre: { type: String },
  plot: { type: String },
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Celebrity" }],
});

module.exports = mongoose.model("Movie", moviesSchema);