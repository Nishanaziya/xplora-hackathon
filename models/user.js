const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const userSchema = new Schema({


    fname :{
        type: String,
        required: [true,"Please enter first name"]
    },

    lname :{
        type: String,
        required:[true,"Please enter last name"]
    },

    email :{
        type: String,
        required: [true,"Please enter mail id"],
        unique: [true,"This mail id already registered"]
    },

    phone :{
        type: Number,
        required: [true,"Please enter phone number"],
        unique: [true,"This phone number is already registered"],
        minlength:[10,"Phone number must be 10 digits"],
        maxlength:[10,"Phone number must be 10 digits"]
    },

    password :{
        type: String,
        required: [true,"Please enter a password"],
        minlength:[8,"Password must contain minimum 8 character"],
        maxlength:[16,"Password cannot exceed 16 characters"]
    },

    role :{
        type: String,
        required: [true,"Please enter your role"]
    }


},{ timestamps: true });



userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
  });
  
  //static method to login user
  
  userSchema.statics.login = async function(email,password){
  
    const user = await this.findOne({ email });
  
    if(user){
      const auth = await bcrypt.compare(password,user.password);
  
      if(auth){
        return user;
      }
      throw Error("Incorrect password");
    }
    throw Error("Incorrect email");
  };
  
const User = mongoose.model("User",userSchema);

module.exports = User;