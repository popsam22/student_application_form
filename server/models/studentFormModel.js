const mongoose = require("mongoose");

const studentFormSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true
  }
});

const Student = mongoose.model("StudentForm", studentFormSchema);

module.exports = Student;
