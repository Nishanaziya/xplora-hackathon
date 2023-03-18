const Parking = require("../models/parking");

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
  const id = req.params.id;
  try {
    const parking = await Parking.findById(id);
    res.status(201).json({ parking: parking });
  } catch (err) {
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

module.exports = { create, show,indexGet,index };
