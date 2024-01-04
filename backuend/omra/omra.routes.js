const express = require("express");
const router = express.Router();
const omraController = require("./omra.controller");

router.get("/", omraController.getAllOmra);
router.post("/", omraController.addOmra);
router.delete("/:title", omraController.removeOmra);

module.exports = router;
