const express = require ("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const DoctorRoute = require("./Routes/DoctorRoute")
const PatientRoute = require("./Routes/patientRoute")

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.CONNECTION).then(()=>{
    console.log("DB IS CONNECTED")
})
app.use("/Doctor", DoctorRoute )
app.use("/patient", PatientRoute)
const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port} port`);
})