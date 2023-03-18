const Parking = require("../models/parking");
const Booking=require("../models/slotbooking")

const create = async (req, res) => {
  const { address, totalSlots, availableSlots, latitude, longitude } = req.body;

  try {
    const parking = await Parking.create({
      address,
      totalSlots,
      availableSlots,
      location: { type: "Point", coordinates: [latitude, longitude] },
    });

    res.status(201).json({ parking: parking._id });
  } catch (err) {
    console.log(err);
  }
};



const show = async (req, res) => {
  const {latitude,longitude,range}=req.query;
  try{
    const parking= await Parking.find({
     location:{
         $nearSphere:{
             $geometry:{
                 type:"Point",coordinates:[latitude,longitude]
             },
             $maxDistance:range
         }
     }
    });
    //res.status(200).json(parking);
    console.log(parking);
    res.render("parking/show",{"parking":parking});
   }
   catch(err){
     console.log(err);
   }
};




const indexGet = (req, res) => {
  res.render("parking/index", { title: "Parking" });
};




const index = async (req, res) => {
  const { latitude, longitude, range } = req.query;

console.log(latitude,longitude,range)

  try{
   const nearByParkings= await Parking.find({
    location:{
        $nearSphere:{
            $geometry:{
                type:"Point",coordinates:[latitude,longitude]
            },
            $maxDistance:range
        }
    }
   });
   res.status(200).json(nearByParkings);
  }
  catch(err){
    console.log(err);
  }
};



const bookGet= (req,res) =>{
   res.render("parking/book");
};


const bookPost= async (req,res) =>{
   const{date,model,numberplate,belongsto} = req.body;
  
   
    try {
      const booking = await Booking.create({
        date,
        model,
        numberplate,
        belongsto
      });
   
   res.status(201).json(booking);
    }
    catch(err){
      console.log(err);
    }
};

module.exports = { create, show,indexGet,index,bookGet,bookPost};
