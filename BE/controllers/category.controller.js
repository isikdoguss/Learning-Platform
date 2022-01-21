const db = require("../config/sequelize.config");
// const Category = require("../models/category");
const model = require("../models");
const Category = model.Category;

//GET PARENTS CATEGORY ONLY.
exports.getParentCategories = async (req, res) => {
  const categories = await Category.findAll({ where: { parentId: null } });

  if (!categories) {
    return res.status(404).send({
      message: `No parent category found.`,
    });
  }

  return res.status(200).send(categories);
};

//GET ALL THE CHILD CATEGORIES FOR A PARENT

exports.findAllChildCategories = async (req, res) => {
  const { parentId } = req.params;
  const categories = await Category.findAll({ where: { parentId: parentId } });

  if (!categories) {
    return res.status(404).send({
      message: `No child category found.`,
    });
  }

  return res.status(200).send(categories);
};

//GET ALL CATEGORIES.
exports.findAllCategories = async (req, res) => {
  const categories = await Category.findAll();

  if (!categories) {
    return res.status(404).send({
      message: `No category found.`,
    });
  }

  return res.status(200).send(categories);
};

//GET CATEGORY BY ID.
exports.getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ where: { id } });

  if (!category) {
    return res.status(404).send({
      message: `No category found with the id ${id}`,
    });
  }

  return res.status(200).send(category);
};

//TODO: user info comes with the token. If the jwtValidation middleware returns an access denied, the user data can be logged.
// Creates new category. The user has to pass jwtValidation
exports.createCategory = async (req, res) => {
  const { name, parentId } = req.body;
  // Checks if the category name exists. parentId can be null if the category is a master.
  if (!name) {
    return res.status(400).send({
      message: "You need to fill in all fields.",
    });
  }

  // Checks if the category name exists
  let categoryExists = await Category.findOne({
    where: { name },
  });
  if (categoryExists)
    return res
      .status(400)
      .send({ message: `A category named ${name} already exists!` });

  // Create category
  try {
    let newCategory = await Category.create({
      name: name,
      parentId: parentId,
    });
    return res.status(201).send(newCategory);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//Updates category, jwt pass needed.

exports.updateCategory = async (req, res) => {
  const { name, parentId } = req.body;
  const { id } = req.params;

  const category = await Category.findOne({ where: { id } });

  if (!category) {
    return res.status(400).send({
      message: `No category exists with the id ${id}`,
    });
  }

  try {
    //TODO: refactor
    if (name) {
      category.name = name;
    }
    if (parentId) {
      category.parentId = parentId;
    }
    category.save();
    return res.status(200).send({
      message: `Category ${name} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//Deletes category, jwt pass needed.

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the category you are trying to delete.`,
    });

  const category = await Category.findOne({ where: { id } });

  if (!category) {
    return res
      .status(400)
      .send({ message: `No category exists with the id ${id}` });
  }

  try {
    await category.destroy();
    return res
      .status(204)
      .send({ message: `Category ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
