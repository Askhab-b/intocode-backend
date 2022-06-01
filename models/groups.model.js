const mongoose = require("mongoose");

const groupsSchema = mongoose.Schema({
  name: String,
  week: Number,
  finish: Boolean,
});

const Group = mongoose.model("Group", groupsSchema);

module.exports = Group;
