const express = require("express")
const route = express.Router()
const controller  = require("../Controller/PatientController")

route.get("/patientappoint" , controller.getDoctorDetails )
route.post("/patientdata" , controller.patientDetails )

module.exports = route