const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingslotSchema = new Schema(
  {
    slotno:{
        type:Number,
        require:[true,"Slot number can't be empty"]

    },

    parkingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parking",
      require: [true, "Parking id cannott be empty"],
    },
    
    date: {
      type: Date,
      required: [true, "Please select a date"],
    },

    model: {
      type: String,
      required: [true, "Please enter a model"],
    },

    numberplate: {
      type: String,
      required: [true, "Please enter number plate"],
    },

    belongsto: {
      type: String,
      required: [true, "Please enter driver name"],
    },
  },
  { timestamps: true }
);

const Parkingslot = mongoose.model("Parkingslot", parkingslotSchema);

module.exports = Parkingslot;
