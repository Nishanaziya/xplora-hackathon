const Parking = require("../models/parking");
const Booking = require("../models/slotbooking");

const create = async (req, res) => {
  const { address, totalSlots, availableSlots, latitude, longitude } = req.body;
  const availableSlotNo = generateSlotsArray(availableSlots);
  console.log(availableSlots);
  try {
    const parking = await Parking.create({
      address,
      totalSlots,
      availableSlots,
      availableSlotNo,
      location: { type: "Point", coordinates: [latitude, longitude] },
    });

    res.status(201).json({ parking: parking._id });
  } catch (err) {
    console.log(err);
  }
};

const show = async (req, res) => {
  const { latitude, longitude, range } = req.query;
  try {
    const parking = await Parking.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [latitude, longitude],
          },
          $maxDistance: range,
        },
      },
    });
    //res.status(200).json(parking);
    console.log(parking);
    res.render("parking/show", { title:"Location",parking: parking });
  } catch (err) {
    console.log(err);
  }
};

const indexGet = (req, res) => {
  res.render("parking/index", { title: "Near by Parking" });
};

const index = async (req, res) => {
  const { latitude, longitude, range } = req.query;

  console.log(latitude, longitude, range);

  try {
    const nearByParkings = await Parking.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [latitude, longitude],
          },
          $maxDistance: range,
        },
      },
    });
    res.status(200).json(nearByParkings);
  } catch (err) {
    console.log(err);
  }
};

const bookGet = (req, res) => {
  const id=req.params.id;
  res.render("parking/book",{title:"Book Parking",parkingId:id});
};

const bookPost = async (req, res) => {
  const { parkingId, availableslotno, date, model, numberplate, belongsto } =
    req.body;

    console.log(parkingId);
  try {
    const parkDetails = await Parking.findById( parkingId );

    console.log(parkDetails);

    let availableSlotNo = parkDetails.availableSlotNo;
    let availableSlots = parkDetails.availableSlots;

    let slotNo = availableSlotNo.pop();

    availableSlots = availableSlots - 1;



    parkDetails.overwrite({
      location: parkDetails.location,
      address: parkDetails.address,
      totalSlots: parkDetails.totalSlots,
      availableSlots,
      availableSlotNo,
    });
    await parkDetails.save();

    const booking = await Booking.create({
      parkingId,
      slotNo,
      date,
      model,
      numberplate,
      belongsto,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.log(err);
  }
};

const generateSlotsArray = (availableSlots) => {
  let array = [];
  for (let i = 1; i <= availableSlots; i++) {
    array.push(i);
  }
  return array;
};
module.exports = { create, show, indexGet, index, bookGet, bookPost };
