const express = require("express");
const route = express.Router();
const DoctorController = require("../Controller/DoctorController");




route.post("/DoctorRegistred", DoctorController.DoctorRegistred );
route.get("/DoctorDisplay", DoctorController.DoctorDisplay );





module.exports = route;