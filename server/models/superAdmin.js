const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const superAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "super-admin"
    }
})

//STATIC SIGNUP METHOD
superAdminSchema.statics.signup = async function (email, password) {

    //email and password validation
    if(!email || !password){
       throw Error('Please enter an email and password.')
    }
    if(!validator.isEmail(email)){
       throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
       throw Error('Weak Password')
    }
 
    //check if email exists before creating a user
    const emailExists = await this.findOne({ email }) 
    if(emailExists){
       throw Error("Email already exists.")
    }
 
    //brcypt salt
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
 
    //creating superadmin document in database
    const superadmin = await this.create({email, password: hash})
    return superadmin
 }

 //STATIC LOGIN METHOD
superAdminSchema.statics.login = async function(email, password){
    
    if(!email || !password){
       throw Error("Please enter an email and password")
    }
 
    const superadmin = await this.findOne({email})
    //if email doesnt exist in database
    if(!superadmin){
       throw Error("Incorrect Email")
    }
 
    //compares password user enters with hashed password stored in database
    const matchingPasswords = await bcrypt.compare(password, superadmin.password)
 
    //if passwords dont match.
    if(!matchingPasswords){
       throw Error("Incorrect password")
    }
 
    //if passwords do match
    return superadmin
 }

module.exports = mongoose.model("superadmin", superAdminSchema)