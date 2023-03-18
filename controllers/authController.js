const User = require("../models/user");

const bcrypt = require("bcrypt");


const signupGet=(req,res)=>{

res.render("authentication/signup");

};
const signup = async (req, res) => {
  const { fname, lname, email, phone, password } = req.body;
  console.log(fname, lname, email, phone, password);
  try {
    const user = await User.create({
      fname,
      lname,
      email,
      phone,
      password,
    });

    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
  }
};

<<<<<<< HEAD
module.exports = { signupGet,signup };
=======


module.exports = { signup };
>>>>>>> 5d2eee6e0c0eaeb7a2d1d0fc0f711069e90ae07b
