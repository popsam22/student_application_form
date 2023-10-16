const mongoose = require("mongoose");
const studentDetailsModel = require("../models/studentDetailsModel");

const createStudentApplicationMap = async (req, res) => {
  try {
    const { schoolName, studentDetails } = req.body;
    const { email } = studentDetails
    console.log(email, !email)
    if (!schoolName) {
      res.status(400).json({ error: "Please fill all required fields." });
    }

    if (email) {
        const user = await studentDetailsModel.findOne({ 'studentDetails.email': email });
        if (user) {
            res.status(400).json({ error: "You have already registered." });
        }
    } else {
      res.status(400).json({ error: "Email is required." });
    }

    //add student to database
    const student = await studentDetailsModel.create({
      schoolName,
      studentDetails
    });

    return res
      .status(201)
      .json({ message: "Student Application submitted successfully", student });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createStudentApplicationMap;
