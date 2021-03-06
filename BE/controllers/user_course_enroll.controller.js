const db = require("../config/sequelize.config");
// const UserCourseEnroll = require("../models/user_course_enroll");
const model = require("../models");
const UserCourseEnroll = model.User_course_enroll;

//GET ALL USER-COURSE ENROLLS.
exports.findAllUserCourseEnrolls = async (req, res) => {
  const enrolls = await UserCourseEnroll.findAll();

  if (!enrolls) {
    return res.status(404).send({
      message: `No enroll found.`,
    });
  }

  return res.status(200).send(enrolls);
};

//GET ENROLLS BY STUDENTID
exports.getUserCourseEnroll = async (req, res) => {
  const { id } = req.params;
  const enroll = await UserCourseEnroll.findOne({ where: { studentId: id } });

  if (!enroll) {
    return res.status(404).send({
      message: `No enroll found with the id ${id}`,
    });
  }

  return res.status(200).send(enroll);
};

//Creates new Enroll.
exports.createUserCourseEnroll = async (req, res) => {
  const { studentId, courseId } = req.body;
  // Checks if the studentId and courseId exist.
  if (!studentId || !courseId) {
    return res.status(400).send({
      message: "You need to fill in all fields.",
    });
  }

  // Checks if the courseId and UserCourseEnroll exist in the database.
  let studentID_courseIDExists = await UserCourseEnroll.findOne({
    where: { studentId, courseId },
  });
  if (studentID_courseIDExists)
    return res.status(400).send({
      message: `A enroll entry with the studentID ${studentId} and courseID ${courseId} already exists!`,
    });

  // Create UserCourseEnroll
  try {
    let newEnroll = await UserCourseEnroll.create({
      studentId,
      courseId,
    });
    return res.status(201).send(newEnroll);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//UPDATE ENROLL
exports.updateEnroll = async (req, res) => {
  const { studentId, courseId } = req.body;
  const { id } = req.params;

  const enroll = await UserCourseEnroll.findOne({ where: { id } });

  if (!enroll) {
    return res.status(400).send({
      message: `No enrollment exists with the id ${id}`,
    });
  }

  try {
    if (studentId) {
      UserCourseEnroll.studentId = studentId;
    }
    if (courseId) {
      UserCourseEnroll.courseId = courseId;
    }
    UserCourseEnroll.save();
    return res.status(200).send({
      message: `Enroll with id ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

//DELETE ENROLL
exports.deleteEnroll = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the enroll you are trying to delete.`,
    });

  const enroll = await UserCourseEnroll.findOne({ where: { id } });

  if (!enroll) {
    return res
      .status(400)
      .send({ message: `No enroll exists with the id ${id}` });
  }

  try {
    await enroll.destroy();
    return res.status(204).send({ message: `Enroll ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
