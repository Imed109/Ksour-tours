const express = require("express");
const router = express.Router();

const {
  
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  userRegister,
  userLogin,
} = require("./user.controller");

const authenticateToken = require("../middlewares/jwt.config"); // Import the authentication middleware
router.post("/register", userRegister);
router.post("/login", userLogin);


// router.use(authenticateToken);

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
