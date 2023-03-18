const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingslotSchema = new Schema({

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