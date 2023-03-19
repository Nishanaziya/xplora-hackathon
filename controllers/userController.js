const { findById } = require("../models/destination");
const Booking=require("../models/slotbooking");

const show=async (req,res) =>{
    
    res.render("user/profile",{title:"Profile"});
};

const bookingGet =async (req,res) =>{
    const id =req.params.id
    try{
        const bookings= Booking.find({
            belongsto:belongsto

        });

        res.render("user/booking",{title:"Booked Tickets",bookings:bookings});
    }catch(err)
    {

    }
}

module.exports={bookingGet,show};