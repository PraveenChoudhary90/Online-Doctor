const DoctorModel = require("../Model/DoctorModel")

const DoctorRegistred = async(req,res)=>{
    const {name,email,number,address,city,specility, password } = req.body;
    try {
        const data = await DoctorModel.create({
            name:name,
            email:email,
            number:number,
            address:address,
            city:city,
            specility:specility,
            password:password
        })
        res.status(200).send({msg: "Doctor registerd Successfully"})
    } catch (error) {
        res.status(400).send({msg:"Error in inserted data in to Server side"})
        
    }
}


const DoctorDisplay = async(req,res)=>{
    try {
      const Display = await DoctorModel.find();
    console.log("okkk");
    res.send(Display);   
    } catch (error) {
        res.send("data error")
        
    }
   
}



module.exports = {
    DoctorRegistred,
    DoctorDisplay
}