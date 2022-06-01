const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  group: {
    ref: "Group",
    type: mongoose.SchemaTypes.ObjectId,
  },
  note: {
    ref: "Note",
    type: mongoose.SchemaTypes.ObjectId,
  },

  payment: Number,

  offer: {
    type: Boolean,
    default: false,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
