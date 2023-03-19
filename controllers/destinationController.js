const Destination = require("../models/destination");
const Booking = require("../models/booking");



const indexGet = (req, res) => {
  res.render("destination/index", { title: "Destination" });
};

const index = async (req, res) => {
  const { district, category } = req.query;

  console.log(district, category);
  try {

    console.log("hai");

    const destinations = await Destination.find({
      $and: [
        { district: district },

        {
          category: category,
        },
      ],
    });
    console.log("try");

    res.render("destination/result", {
      title: "Search Results",
      destinations: destinations,
    });
    //   res.status(200).json({
    //   destinations: destinations,
    // });
  } catch (err) {
    console.log("error");

    console.log(err);
  }
};

const createGet = (req, res) => {
  res.render("destination/create", { title: "Register Destination" });
};

const create = async (req, res) => {
  const {
    district,
    category,
    totalTickets,
    availableTickets,
    name,
    address,
    price,
  } = req.body;

  try {
    const destination = await Destination.create({
      district,
      category,
      totalTickets,
      availableTickets,
      name,
      address,
      price,
    });

    res.status(201).json({
      destination: destination._id,
    });
  } catch (err) {
    console.log(err);
  }
};



const show = async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await Destination.findById(id);
    res.render("destination/show", {
      title: "Destination",
      destination: destination,
    });
  } catch (err) {
    console.log(err);
  }
};

const bookGet = async (req,res) => {
  const id = req.params.id;
  try {
    const destination = await Destination.findById(id);
    res.render("destination/book", {
      title: "Book Destination",
      destination: destination,
    });
  } catch (err) {
    console.log(err);
  }
}

const book = async (req,res) => {

  const {name, date, noofTickets , destination , total } = req.body;
  const belongsto=res.locals.user._id;

  console.log(name,date,noofTickets,destination,total);

  try{

    console.log("hai");

    const ticket = await Booking.create({
      name , date , noofTickets , destination , total,belongsto
    });

    res.status(201).json({ ticket: ticket._id});
  
  }catch(err){
    console.log(err);
  }
};

module.exports = { indexGet, index, createGet, create, show,bookGet,book };
