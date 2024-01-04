const express = require("express");
const router = express.Router();
const ferryController = require("./ferries.controller");

router.get("/", ferryController.getAllFerries);
router.post("/", ferryController.addFerry);
router.delete("/:name", ferryController.removeFerry);
router.delete('/', ferryController.removeAllFerries);
module.exports = router;
