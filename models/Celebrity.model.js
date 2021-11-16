//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String },
});

module.exports = mongoose.model("Celebritiy", celebritySchema);
