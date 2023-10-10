// function that calls Paystack Api and submits transaction details & authorization
// headers to initialize & verify them

const paystack = (request) => {
  const mySecretKey = process.env.MYSECRETKEY;

  const initializePayment = (form, cb) => {
    //this gets submitted to paystack
    const options = {
      url: "https://api.paystack.co/transaction/initialize",
      headers: {
        Authorization: `Bearer ${mySecretKey}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      form, //this form contains info about our customer making the payment(name, amount, email,...)
    };

    const callback = (error, response, body) => {
        //include logic to check for reponse body and status code
      return cb(error, body);
    };
    request.post(options, callback);
  };

  const verifyPayment = (reference, cb) => {
    const options = {
      url:
        "https://api.paystack.co/transaction/verify/"+
        encodeURIComponent(reference),
      headers: {
        Authorization: `Bearer ${mySecretKey}`,
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    };

    const callback = (error, response, body) => {
        //include logic to check response body and status code 
      return cb(error, body);
    };
    request.get(options, callback);
  };

  return { initializePayment, verifyPayment };
};

module.exports = paystack;