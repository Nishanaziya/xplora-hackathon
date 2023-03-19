const userController= require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.get("/user/profile",userController.show);
router.get("/user/bookings/:id",userController.bookingGet);



module.exports = router;