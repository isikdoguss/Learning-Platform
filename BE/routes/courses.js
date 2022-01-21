const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/verifyToken");
const courseController = require("../controllers/course.controller");

// all routes in here are starting with '/courses'
router.get("/category/:categoryId", courseController.findAllCoursesByCategory);
router.get("/:id", courseController.getCourse);
router.get("/", courseController.findAllCourses);

// Protected routes
router.post("/", authenticate, courseController.createCourse);
router.put("/:id", authenticate, courseController.updateCourse);
router.delete("/:id", authenticate, courseController.deleteCourse);

module.exports = router;
