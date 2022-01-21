const router = require("express").Router();
const authenticate = require("../middlewares/verifyToken");
const categoriesController = require("../controllers/category.controller");

// all routes in here are starting with '/category'

// Test: verify -> middleware that checks the token whether it can access the route or not
router.get(
  "/categoryChilds/:parentId",
  categoriesController.findAllChildCategories
);
router.get("/parentCategories", categoriesController.getParentCategories);
router.get("/:id", categoriesController.getCategory);
router.get("/", categoriesController.findAllCategories);

// Protected routes
router.post("/", authenticate, categoriesController.createCategory);
router.put("/:id", authenticate, categoriesController.updateCategory);
router.delete("/:id", authenticate, categoriesController.deleteCategory);

module.exports = router;
