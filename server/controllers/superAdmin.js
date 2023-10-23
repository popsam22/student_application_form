const jwt = require("jsonwebtoken");
const superadmin = require("../models/superAdmin");
const admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

//generates jwt, takes id prop of user from mongoDB
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTSECRET, { expiresIn: "1d" });
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const superAdmin = await superadmin.signup(email, password);

    //creating token for super admin with createToken f/n
    const token = createToken(superAdmin._id);
    return res.status(201).json({ email, token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const superAdmin = await superadmin.login(email, password);

    const token = createToken(superAdmin._id);
    return res.status(201).json({ email, token, role: "super admin" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Email and Password are required" });
  }

  // check if admin exists before creating one
  const emailExists = await admin.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: "Admin already exists" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const admin = await admin.create({
      name,
      email,
      password: hash,
    });

    //creating token for school admin with createToken f/n
    const token = createToken(admin._id);
    return res.status(200).json({ admin, token });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create admin" });
  }
};

const deleteAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    //checks if id is a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid admin ID" });
    }

    const adminExists = await admin.findByIdAndDelete(id);

    if (!adminExists) {
      return res.status(404).json({ error: "No admin found" });
    }

    return res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    //checks if the id is a valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid admin ID" });
    }

    //finds admin by id and updates it. returns newly updated admin doc
    const adminExists = await admin.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!adminExists) {
      return res.status(404).json({ error: "No admin found" });
    }

    return res
      .status(200)
      .json({ message: "Admin updated successfully", admin: adminExists });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const disableAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid admin ID" });
    }

    const adminExists = await admin.findByIdAndUpdate(
      id,
      { disabled: true },
      { new: true }
    );

    if (!adminExists) {
      return res.status(404).json({ error: "No admin found" });
    }

    return res
      .status(200)
      .json({ admin: adminExists, message: "Admin disabled successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const enableAdmin = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Invalid admin ID" });
    }

    const adminExists = await admin.findByIdAndUpdate(
      id,
      { disabled: false },
      { new: true }
    );
    if (!adminExists) {
      return res.status(404).json({ error: "No admin found" });
    }

    return res
      .status(200)
      .json({ message: "Admin enabled successfully", admin: adminExists });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//get all admins


module.exports = {
  signup,
  login,
  createAdmin,
  deleteAdmin,
  updateAdmin,
  disableAdmin,
  enableAdmin,
};