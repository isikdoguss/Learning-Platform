const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/verifyToken");
const userRolesController = require("../controllers/user_role.controller");

// all routes in here are starting with '/userRoles'
router.get("/", userRolesController.findAllUserRoles);
router.get("/:id", userRolesController.getUserRole);

// Protected routes
router.post("/", authenticate, userRolesController.createUserRole);
router.put("/:id", authenticate, userRolesController.updateUserRole);
router.delete("/:id", authenticate, userRolesController.deleteUserRole);

module.exports = router;
