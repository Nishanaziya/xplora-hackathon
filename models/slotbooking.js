const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingslotSchema = new Schema({

    date:{
        type: Date,
        required:true,
    },

    model:{
        type: String,
        required:true,
    },

    numberplate:{
        type:number,
        required:true,
    },

    belongsto:{
        type:String,
        required:true,
    },
    

},{ timestamps: true });


const Parkingslot = mongoose.model("Parkingslot",parkingslotSchema);

module.exports = Parkingslot;