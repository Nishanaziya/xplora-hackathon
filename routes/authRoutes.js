const authController = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router.post("/auth/signup",authController.signup);
//router.post("/auth/signin",authController.signin);



module.exports = router;