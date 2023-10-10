const {beginPayment, createPayment, generateReceipt} = require('../service/payment.service')

const initializePayment = async (req, res) => {
    try {
        const response = await beginPayment(req.body)
        res.status(201).json({status: "success", data: response})
    } catch (error) {
        res.status(500).json({status: "failed", message: error.message})
    }
}

const verifyPayment = async (req,res) => {
    try {
        const response = await createPayment(req.query)
        res.status(201).json({status: "success", data: response})
    } catch (error) {
        res.status(500).json({status: "failed", message: error.message})
    }
}

const getPaymentReceipt = async (req, res) => {
    try {
        const response = await generateReceipt(req.body)
        res.status(201).json({status: "success", data: response})
    } catch (error) {
        res.status(500).json({status: "failed", message: error.message})
    }
}


module.exports = { initializePayment, verifyPayment, getPaymentReceipt };