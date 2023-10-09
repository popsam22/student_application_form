const mongoose = require("mongoose");
const StudentForm = require("../models/studentFormModel");

const createStudentApplication = async (req, res) => {
  try {
    const { name, email, gender, nationality } = req.body;

    if (!name || !email || !gender || !nationality) {
      res.status(400).json({ error: "Please fill all required fields." });
    }

    //check if student application already exists
    const studentExists = await StudentForm.findOne({ name });

    if (studentExists) {
      res.status(400).json({ error: "You have already registered." });
    }

    //add student to database
    const student = await StudentForm.create({
      name,
      email,
      gender,
      nationality,
    });

    return res
      .status(201)
      .json({ message: "Student Application submitted successfully", student });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createStudentApplication;
