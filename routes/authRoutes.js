const authController = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router.post("/auth/signup",authController.signup);

router.get("/auth/signup",authController.signupGet);
router.post("/auth/login",authController.login);
router.get("/auth/login",authController.loginGet);



module.exports = router;