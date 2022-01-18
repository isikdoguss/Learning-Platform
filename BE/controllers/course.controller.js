const { Op } = require("sequelize");
const db = require("../config/sequelize.config");
const Course = require("../models/course");
const Course_category = require("../models/course_category");

exports.findAllCoursesByCategory = async (req, res) => {
  const { categoryId } = req.params;
  // let { limit, page } = req.query;
  // page < 1 ? page=1: page ;
  // const offset =  (page * limit - limit);
  const courses = await Course.findAll({
    include: [
      {
        model: Course_category,
        where: { category_id: categoryId },
      },
    ],
    // limit: limit,
    // offset: offset,
    where: { parent_id: { [Op.ne]: null } },
  });

  if (!courses) {
    return res.status(404).send({
      message: `No course found.`,
    });
  }

  return res.status(200).send(courses);
};

exports.findAllCourses = async (req, res) => {
  const courses = await Course.findAll();

  if (!courses) {
    return res.status(404).send({
      message: `No course found.`,
    });
  }

  return res.status(200).send(courses);
};

exports.getCourse = async (req, res) => {
  const { id } = req.params;
  const course = await Course.findOne({
    where: { id },
  });
  if (!course) {
    return res.status(404).send({
      message: `No course found with the id ${id}`,
    });
  }

  return res.status(200).send(course);
};

exports.createCourse = async (req, res) => {
  const { name, sku, description, parentId, stock } = req.body;
  // Checks if the product name exists. parentId can be null if the product is a parent product.
  if (!name || !sku || !description || !stock) {
    return res.status(400).send({
      message: "You need to fill in the product name.",
    });
  }

  // Checks if the product name exists
  let productExists = await Product.findOne({
    where: { name },
  });
  if (productExists)
    return res
      .status(400)
      .send({ message: `A product named ${name} already exists!` });

  // Create product
  try {
    let newProduct = await Product.create({
      name,
      sku,
      description,
      parentId,
      stock,
    });
    console.log(newProduct);
    return res.status(201).send(newProduct);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

/**
 * Updates product
 * The user has to pass jwtValidation
 * @param {Express.request} req Request that includes product information that are name, parentId <nullable>
 * @param {Express.response} res
 * @returns
 */
exports.updateProduct = async (req, res) => {
  const { name, sku, description, stock, parentId } = req.body;
  const { id } = req.params;

  const product = await Product.findOne({ where: { id } });

  if (!product) {
    return res.status(400).send({
      message: `No product exists with the id ${id}`,
    });
  }

  try {
    //TODO: refactor
    if (name) {
      product.name = name;
    }
    if (sku) {
      product.parentId = parentId;
    }
    if (description) {
      product.parentId = parentId;
    }
    if (stock) {
      product.parentId = parentId;
    }
    if (parentId) {
      product.parentId = parentId;
    }
    product.save();
    return res.status(200).send({
      message: `Product ${name} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

/**
 * Deletes product
 * The user has to pass jwtValidation
 * @param {Express.request} req Request that includes product id as params
 * @param {Express.response} res
 * @returns
 */
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the product you are trying to delete.`,
    });

  const product = await Product.findOne({ where: { id } });

  if (!product) {
    return res
      .status(400)
      .send({ message: `No product exists with the id ${id}` });
  }

  try {
    await product.destroy();
    return res.status(204).send({ message: `Product ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
