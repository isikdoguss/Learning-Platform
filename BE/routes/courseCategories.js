const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/verifyToken");
const courseCategoriesController = require("../controllers/course_category.controller");

// all routes in here are starting with '/courseCategories'

router.get("/", courseCategoriesController.findAllCourseCategories);
router.get("/:id", courseCategoriesController.getCourseCategory);

// Protected routes
router.post("/", authenticate, courseCategoriesController.createCourseCategory);
router.put(
  "/:id",
  authenticate,
  courseCategoriesController.updateCourseCategory
);
router.delete(
  "/:id",
  authenticate,
  courseCategoriesController.deleteCourseCategory
);

module.exports = router;
