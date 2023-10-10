const studentRouteDocs = require("../routes/doc.swagger");

const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "Student Application Form Documentation",
    descripton: "This is a documentation for the student application form",
    version: "0.1",
  },
  servers: [
    {
      url: "http://localhost:4000",
      descripton: "Dev Environment",
    },
    {
      url: "http://skoolbod.com",
      descripton: "Production Environment",
    },
  ],
  tags: [
    {
      name: "Student",
      description: "Student Route",
    },
    {
      name: "Payment",
      description: "Payment Route",
    },
  ],
  paths: {
    ...studentRouteDocs,
  },
};

module.exports = swaggerDocs;
