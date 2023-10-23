const mongoose = require("mongoose");
const bcrypt = require("bcrypt");0

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  schoolName: {
    type: String,
    required: true,
    unique: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  schoolAddress: {
    type: String,
    required: true,
  },
  formTemplate: {
    type: String,
    default: null,
    required: true,
  },
  role: {
    type: String,
    default: "admin",
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: true,
  },
});

adminSchema.statics.login = async (email, password) => {
  if (!email || !password) {
    throw Error("Please enter your login credentials");
  }

  const admin = await this.findOne({ email });

  //if email doesnt exist in database
  if (!admin) {
    throw Error("Incorrect Email");
  }

  //compares password user enters with hashed password stored in database
  const matchingPasswords = await bcrypt.compare(password, admin.password);

  if (!matchingPasswords) {
    throw Error("Incorrect Password");
  }

  //if passwords do match
  return admin;
};



module.exports = mongoose.model("admin", adminSchema);