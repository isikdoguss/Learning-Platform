const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/verifyToken");
const rolesController = require("../controllers/role.controller");

// all routes in here are starting with '/roles'
router.get("/", rolesController.findAllRoles);
router.get("/:id", rolesController.getRole);

// Protected routes
router.post("/", authenticate, rolesController.createRole);
router.put("/:id", authenticate, rolesController.updateRole);
router.delete("/:id", authenticate, rolesController.deleteRole);

module.exports = router;
