const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({

    district: {
        type: String,
        required: [true,"Please choose a district"],
    },

    category: {
        type: String,
        required: [true,"Please choose a category"],
    },
    
    totalTickets: {
        type: Number,
        required: [true,"Please enter total Tickets"]
    },
    availableTickets: {
        type: Number,
        required: [true,"Please enter available Tickets"]
    },

    name: {
        type: String,
        required: [true,"Please enter name"],
    },

    address: {
        type: String,
        required: [true,"Please enter address"],
    },

    price: {
        type: Number,
        required: [true,"Please enter price"],

    }




},{ timestamps: true });


const Destination = mongoose.model("Destination",destinationSchema);

module.exports = Destination;
