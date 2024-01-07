const express = require("express");
const router = express.Router();

const {
  getAllAdmins,    // Update the controller functions to handle admins
  getAdminById,
  updateAdminById,
  deleteAdminById,
  adminRegister,
  adminLogin,
} = require("./admin.controlleur");

const authenticateToken = require("../middlewares/jwt.config");

router.post("/register", adminRegister);
router.post("/login", adminLogin);

// Uncomment the following line if you want to protect the routes with authentication
// router.use(authenticateToken);

router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", updateAdminById);
router.delete("/:id", deleteAdminById);

module.exports = router;
