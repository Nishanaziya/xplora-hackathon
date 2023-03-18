const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingslotSchema = new Schema({
<<<<<<< HEAD
    parkingid:{
        type:Number,
        required:[true,"ParkingId should not be empty"]
    },
    availableslotno:{
        type:[Number],
        required:[true,"Please select an available slot"]
    },
=======

    parkingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parking",
        require: [true, "Parking id cannott be empty"],
    },
    slotNo: {
        type: Number,
        required: [true,"Slot number cannot be empty"],
    },
    duration: {
        type: Number,
        required: [true,"Please specify a duration"]
    },

>>>>>>> 5d2eee6e0c0eaeb7a2d1d0fc0f711069e90ae07b
    date:{
        type: Date,
        required:[true,"Please select a date"]
    },

    model:{
        type: String,
        required:[true,"Please enter a model"]
    },

    numberplate:{
        type:String,
        required:[true,"Please enter number plate"]
    },

    belongsto:{
        type:String,
        required:[true,"Please enter driver name"]
    },
    

},{ timestamps: true });


const Parkingslot = mongoose.model("Parkingslot",parkingslotSchema);

module.exports = Parkingslot;