const submitStudentApplication = {
  tags: ["Student"],
  description: "Submit a student application form",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Sam Julius",
            },
            email: {
              type: "string",
              example: "samjulius@skoolbod.com",
            },
            gender: {
              type: "string",
              example: "male",
            },
            nationality: {
              type: "string",
              example: "Nigerian",
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: "Submit a student application form",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              message: "Student Application submitted successfully",
              student: {
                name: "Sam Julius",
                email: "samjulius@skoolbod.com",
                gender: "male",
                nationality: "Nigerian",
                _id: "6523dce73020f55f1f142bd9",
                __v: 0,
              },
            },
          },
        },
      },
    },
  },
};

const initializePayment = {
  tags: ["Payment"],
  description: "initialize payment for student application form fee",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Sam Julius",
            },
            email: {
              type: "string",
              example: "samjulius@skoolbod.com",
            },
            amount: {
              type: "number",
              example: 1000,
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              status: "success",
              data: {
                status: true,
                message: "Authorization URL created",
                data: {
                  authorization_url:
                    "https://checkout.paystack.com/i9e5ltc2d15jg17",
                  access_code: "i9e5ltc2d15jg17",
                  reference: "xtceu5cp3n",
                },
              },
            },
          },
        },
      },
    },
  },
};

const verifyPayment = {
  tags: ["Payment"],
  description: "verify payment",
  responses: {
    201: {
      description: "Payment successful",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              status: "success",
              data: {
                name: "Sam Julius",
                email: "samjulius@skoolbod.com",
                amount: 1000,
                reference_id: "xtceu5cp3n",
                transaction_status: "success",
                _id: "651ece59d293f17435a0a7ef",
                createdAt: "2023-10-05T14:55:21.272Z",
                updatedAt: "2023-10-05T14:55:21.272Z",
                __v: 0,
              },
            },
          },
        },
      },
    },
  },
};

const generateReceipt = {
  tags: ["Payment"],
  description: "Generate receipt for payment",
  responses: {
    201: {
      description: "Receipt generated",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              status: "success",
              data: {
                _id: "651ece59d293f17435a0a7ef",
                name: "Sam Julius",
                email: "samjulius@skoolbod.com",
                amount: 1000,
                reference_id: "xtceu5cp3n",
                transaction_status: "success",
                createdAt: "2023-10-05T14:55:21.272Z",
                updatedAt: "2023-10-05T14:55:21.272Z",
                __v: 0,
              },
            },
          },
        },
      },
    },
  },
};

const studentRouteDocs = {
  "/api/v1/student/submit-application": {
    post: submitStudentApplication,
  },
  "/api/v1/payment": {
    post: initializePayment,
  },
  "/api/v1/payment/create-payment": {
    get: verifyPayment,
  },
  "/api/v1/payment/receipt": {
    get: generateReceipt,
  },
};

module.exports = studentRouteDocs;
