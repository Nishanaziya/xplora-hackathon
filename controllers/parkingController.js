const Parking = require("../models/parking");



const create = async (req,res) =>{
    const {address ,totalSlots,availableSlots,latitude,longitude}=req.body;
    
try{
   const parking = await Parking.create({
        address,
        totalSlots,
        availableSlots,
        location : { type: "Point" , coordinates: [latitude,longitude]}
    });

    res.status(201).json({parking:parking._id});
}
catch(err){
    console.log(err);
}
      
};
const show= async (req,res) =>{
 const  id=req.params.id;
 try{
    const parking=await Parking.findById(id);
    res.status(201).json({parking:parking});
 }
 catch(err){
    console.log(err);
 }
    
};

model.exports={create,show};
