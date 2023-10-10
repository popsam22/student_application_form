// allows transactions to be initialized and verified by giving access to
// the payment file in the util folder

const request = require("request");
const Payment = require("../models/paymentModel");
const { initializePayment, verifyPayment } =
  require("../utils/payment")(request);

//initializes the payment
const beginPayment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, amount, email } = data;
      const form = { name, amount, email };

      form.metadata = {
        name: form.name,
      };
      form.amount *= 100;

      initializePayment(form, (error, body) => {
        if (error) {
          reject(error.message);
        }
        const response = JSON.parse(body);

        return resolve(response);
      });
    } catch (error) {
      error.source = "Begin Payment Service";
      return reject(error);
    }
  });
};

const createPayment = (req) => {
  const reference = req.reference;
  if (reference === null) {
    return Promise.reject({ code: 400, message: "No reference available" });
  }
  return new Promise(async (resolve, reject) => {
    try {
      verifyPayment(reference, (error, body) => {
        if (error) {
          reject(error.message);
        }
        const response = JSON.parse(body);
        console.log(response);

        const { reference, amount, status } = response.data;
        const email = response.data.customer.email;
        const name = response.data.metadata.name;
        const payment = Payment.create({
          reference_id: reference,
          name,
          email,
          amount,
          transaction_status: status,
        });

        return resolve(payment);
      });
    } catch (error) {
      error.source = "Create Payment Service";
      return reject(error);
    }
  });
};

const generateReceipt = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const reference_id = body.reference;
      const transaction = Payment.findOne({ reference_id });
      return resolve(transaction);
    } catch (error) {
      error.sauce = "Generate Receipt Service";
      return reject(error);
    }
  });
};

module.exports = { beginPayment, createPayment, generateReceipt };
