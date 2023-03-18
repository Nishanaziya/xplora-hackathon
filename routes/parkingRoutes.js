const parkingController = require("../controllers/parkingController");

const express = require("express");

const router = express.Router();

//router.get("/admin/parking-slot",parkingController.createGet);
router.post("/admin/parking-slot", parkingController.create);
router.get("/user/parking-slots", parkingController.indexGet);
router.get("/user/parking-slots-data", parkingController.index);
// router.get("/user/parking-slot-data/:id",parkingController.show);
// router.post("/user/parking-slot-booking",parkingController.create);
// router.get("/user/parking-slot-booking/:id",parkingController.show);

module.exports = router;
