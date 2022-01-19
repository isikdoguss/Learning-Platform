const db = require("../config/sequelize.config");
const CourseCategory = require("../models/course_category");

//GET ALL COURSE-CATEGORIES.
exports.findAllCourseCategories = async (req, res) => {
  const courseCategories = await CourseCategory.findAll();

  if (!courseCategories) {
    return res.status(404).send({
      message: `No course category found.`,
    });
  }

  return res.status(200).send(courseCategories);
};

//GET COURSE-CATEGORY BY ID
exports.getCourseCategory = async (req, res) => {
  const { id } = req.params;
  const courseCategory = await CourseCategory.findOne({
    where: { course_id: id },
  });

  if (!courseCategory) {
    return res.status(404).send({
      message: `No courseCategory found with the id ${id}`,
    });
  }

  return res.status(200).send(courseCategory);
};

//Creates new courseCategory

exports.createCourseCategory = async (req, res) => {
  const { courseId, categoryId } = req.body;
  // Checks if the courseId and categoryId exist.
  if (!courseId || !categoryId) {
    return res.status(400).send({
      message: "You need to fill in all fields.",
    });
  }

  // Checks if the courseId and courseCategory exist in the database.
  let courseId_categoryIdExists = await CourseCategory.findOne({
    where: { course_id: courseId, category_id: categoryId },
  });
  if (courseId_categoryIdExists)
    return res.status(400).send({
      message: `A course category entry with the courseId ${courseId} and categoryId ${categoryId} already exists!`,
    });

  // Create courseCategory
  try {
    let newCourseCategory = await CourseCategory.create({
      course_id: courseId,
      category_id: categoryId,
    });
    return res.status(201).send(newCourseCategory);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//UPDATE COURSE-CATEGORY
exports.updateCourseCategory = async (req, res) => {
  const { courseId, categoryId } = req.body;
  const { id } = req.params;

  const courseCategory = await CourseCategory.findOne({ where: { id } });

  if (!courseCategory) {
    return res.status(400).send({
      message: `No courseCategory exists with the id ${id}`,
    });
  }

  try {
    //TODO: refactor
    if (courseId) {
      courseCategory.course_id = courseId;
    }
    if (categoryId) {
      courseCategory.category_id = categoryId;
    }
    courseCategory.save();
    return res.status(200).send({
      message: `CourseCategory with id ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//DELETE COURSE-CATEGORY
exports.deleteCourseCategory = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the courseCategory you are trying to delete.`,
    });

  const courseCategory = await CourseCategory.findOne({ where: { id } });

  if (!courseCategory) {
    return res
      .status(400)
      .send({ message: `No courseCategory exists with the id ${id}` });
  }

  try {
    await courseCategory.destroy();
    return res
      .status(204)
      .send({ message: `CourseCategory ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
