const express = require("express");
const router = express.Router();
const airlinesController = require("./airlines.controller");

router.get("/", airlinesController.getAllAirlines);
router.get("/:id", airlinesController.getAirlineById);
router.post("/", airlinesController.addAirline);
router.delete("/:companyName", airlinesController.removeAirline);
// Other routes as needed

module.exports = router;

