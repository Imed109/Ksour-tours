const express = require("express");
const router = express.Router();
const hotelsController = require("./hotels.controller");

// Get all hotels
router.get("/", hotelsController.getAllHotels);

// Add a new hotel
router.post("/", hotelsController.addHotel);

// Remove a hotel by name
router.delete("/:name", hotelsController.removeHotelByName);

module.exports = router;
