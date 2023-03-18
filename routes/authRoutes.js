const authController = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router.post("/auth/signup",authController.signup);
router.get("/auth/signup",authController.signup);
router.post("/auth/loginin",authController.login);
router.get("/auth/loginin",authController.login);



module.exports = router;