const mongoose = require("mongoose");

// const studentFormSchema = new mongoose.Schema({
//   name: {
//     required: true,
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   nationality: {
//     type: String,
//     required: true
//   }
// });

const studentSchema = new mongoose.Schema({
    schoolName: {
        required: true,
        type: String,
      },
    studentDetails: {
      type: Map,
      of: String,
      validate: function(map) {
        for (const handle of map.values()) { 
          console.log(handle)
          if (handle.startsWith('http://')) {
            throw new Error(`Handle ${handle} must not be a URL`);
          }
        }
        return true;
      }
    }
  });
const StudentDetails = mongoose.model('StudentDetails', studentSchema);

// const Student = mongoose.model("StudentForm", studentFormSchema);

module.exports = StudentDetails;
