const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    address:String,
    city:String,
    specility:String,
    password:String
})

module.exports = mongoose.model("doctor", DoctorSchema);