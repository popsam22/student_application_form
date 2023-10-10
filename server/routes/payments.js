const express = require('express')
const {initializePayment, verifyPayment, getPaymentReceipt} = require('../controllers/payment')

const router = express.Router()

router.post('/', initializePayment)

router.get('/create-payment', verifyPayment)

router.get("/receipt", getPaymentReceipt)

module.exports = router