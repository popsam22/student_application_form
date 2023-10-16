require("dotenv").config();

const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const swagger = require('swagger-ui-express')

//route
const swaggerDocs = require('./utils/swagger')
const studentRoutes = require('./routes/studentsForm')
const paymentRoutes = require('./routes/payments')

const app = express()

//Parse JSON requests
app.use(express.json())

//middleware
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server up and running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/docs/api', swagger.serve)
app.use('/docs/api', swagger.setup(swaggerDocs))

app.use('/api/v1/student', studentRoutes)
app.use('/api/v1/payment', paymentRoutes)
