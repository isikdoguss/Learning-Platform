const auth = require("./auth");
const users = require("./users");
const roles = require("./roles");
const userRoles = require("./userRoles");
const categories = require("./categories");
const courses = require("./courses");
const courseCategories = require("./courseCategories");

const routes = {
  auth,
  users,
  roles,
  userRoles,
  categories,
  courses,
  courseCategories,
};

module.exports = routes;
