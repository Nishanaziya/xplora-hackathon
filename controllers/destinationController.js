const Destination = require("../models/destination");

const indexGet = (req, res) => {
  res.render("destination/index", { title: "Destination" });
};

const index = async (req, res) => {
  const { district, category } = req.query;

  console.log(district, category);
  try {
    const destinations = await Destination.find({
      $and: [
        { district: district },

        {
          category: category,
        },
      ],
    });

    res.render("destination/result", {
      title: "Search Results",
      destinations: destinations,
    });
    // res.status(200).json({
    //   destinations: destinations,
    // });
  } catch (err) {
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

const book = async (req,res) => {
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



module.exports = { indexGet, index, createGet, create, show,book };
