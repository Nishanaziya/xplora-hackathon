const destinationController= require("../controllers/destinationController");

const express = require("express");

const router = express.Router();

router.get("/user/destinations",destinationController.indexGet);
router.get("/user/destinations-in",destinationController.index);
router.get("/user/create-destinations",destinationController.createGet);
router.post("/user/create-destinations",destinationController.create);
router.get("/user/destination/:id",destinationController.show);
//router.get("/user/destination/:id",destinationController.show);
router.get("/user/book-destination/:id",destinationController.book);









module.exports = router;