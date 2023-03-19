const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    name: {
        type:String,
        required: [true,"Please enter your name"],
    },

    date: {
        type:Date,
        required: [true,"Please choose a date"],

    },

    noofTickets:{
        type:Number,
        required: [true,"Please choose no.of Tickets"],

    },

    destination:{
        type:String,
        required: [true,"Please enter Destination"],

    }





},{ timestamps: true });


const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;
