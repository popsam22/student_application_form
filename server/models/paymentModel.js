const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    reference_id: {
        unique: true,
        type: String,
        required: true
    },
    transaction_status: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("PaymentModel", paymentSchema)