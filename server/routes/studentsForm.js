const express = require('express')
const studentApplication = require('../controllers/studentFormController')

const router = express.Router()

router.post('/submit-application', studentApplication)

module.exports = router