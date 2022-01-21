const { Op } = require("sequelize");
const db = require("../config/sequelize.config");
const model = require("../models");
const Course = model.Course;
const Course_category = model.Course_category;

//GET ALL COURSES UNDER THE SPECIFIIC CATEGORY.
exports.findAllCoursesByCategory = async (req, res) => {
  const { categoryId } = req.params;

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

//GET ALL COURSES.
exports.findAllCourses = async (req, res) => {
  const courses = await Course.findAll();

  if (!courses) {
    return res.status(404).send({
      message: `No course found.`,
    });
  }

  return res.status(200).send(courses);
};

//GET A SPECIFIC COURSE.
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

//CREATE NEW COURSE.
exports.createCourse = async (req, res) => {
  const { name, tutorId, path } = req.body;
  //
  if (!name || !tutorId || !path) {
    return res.status(400).send({
      message: "You need to fill in the course name,tutorId,path.",
    });
  }

  // Checks if the course name exists
  let courseExists = await Course.findOne({
    where: { name },
  });
  if (courseExists)
    return res
      .status(400)
      .send({ message: `A course named ${name} already exists!` });

  // Create course
  try {
    let newCourse = await Course.create({
      name,
      tutorId,
      path,
    });

    return res.status(201).send(newCourse);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//UPDATE A COURSE.
exports.updateCourse = async (req, res) => {
  const { name, tutorId, path } = req.body;
  const { id } = req.params;

  const course = await Course.findOne({ where: { id } });

  if (!course) {
    return res.status(400).send({
      message: `No course exists with the id ${id}`,
    });
  }

  try {
    if (name) {
      course.name = name;
    }
    if (tutorId) {
      course.tutorId = tutorId;
    }
    if (path) {
      course.path = path;
    }

    course.save();
    return res.status(200).send({
      message: `Course ${name} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//DELETE A COURSE.
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the course you are trying to delete.`,
    });

  const course = await Course.findOne({ where: { id } });

  if (!course) {
    return res
      .status(400)
      .send({ message: `No course exists with the id ${id}` });
  }

  try {
    await course.destroy();
    return res.status(204).send({ message: `Course ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
