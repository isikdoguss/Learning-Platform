const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/verifyToken");
const usersController = require("../controllers/user.controller");

// all routes in here are starting with '/users'
router.get("/", usersController.findAllUsers);
router.get("/:id", usersController.getUser);

// Protected routes
router.post("/", authenticate, usersController.createUser);
router.put("/:id", authenticate, usersController.updateUser);
router.delete("/:id", authenticate, usersController.deleteUser);

module.exports = router;
