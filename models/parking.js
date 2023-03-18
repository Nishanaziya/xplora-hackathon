const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingSchema = new Schema({

    
    address: {
        type: String,
        required: [true,"Please enter address"],
        unique: [true,"Address already registered"]
    },
    totalSlots: {
        type: Number,
        required: [true,"Please enter total slots"]
    },
    availableSlots: {
        type: Number,
        required: [true,"Please enter available slots"]
    },
    location: {
        type: {
          type: String,
          enum:['Point'],
          required: [true,"Please enter the location"]
    },
    coordinates: {
          type: [Number],
          required: [true,"Please enter the cordinates"]
        }
    },

},{ timestamps: true });


const Parking = mongoose.model("Parking",parkingSchema);

module.exports = Parking;