const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/verifyToken");
const enrollController = require("../controllers/user_course_enroll");

// all routes in here are starting with '/enroll'
router.get("/", enrollController.findAllUserCourseEnrolls);
router.get("/:studentId", enrollController.getUserCourseEnroll);
router.get("/", enrollController.findAllCourses);

// Protected routes
router.post("/", authenticate, enrollController.createUserCourseEnroll);
router.put("/:id", authenticate, enrollController.updateEnroll);
router.delete("/:id", authenticate, enrollController.deleteEnroll);

module.exports = router;
