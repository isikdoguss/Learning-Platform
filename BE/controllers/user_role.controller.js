const db = require("../config/sequelize.config");
const user_role = require("../models/user_role");

exports.findAllUserRoles = async (req, res) => {
  const userRoles = await user_role.findAll();

  if (!userRoles) {
    return res.status(404).send({
      message: `No user role found.`,
    });
  }

  return res.status(200).send(userRoles);
};

exports.getUserRole = async (req, res) => {
  const { id } = req.params;
  const userRole = await user_role.findOne({ where: { user_id: id } });

  if (!userRole) {
    return res.status(404).send({
      message: `No user role found with the id ${id}`,
    });
  }

  return res.status(200).send(userRole);
};

exports.createUserRole = async (req, res) => {
  const { userId, roleId } = req.body;
  // Checks if the userId and roleId are non-null.
  if (!userId || !roleId) {
    return res.status(400).send({
      message: "You need to fill in all fields.",
    });
  }
  // Check whether there is an entry in the database matching the userId and roleId given in the data.
  let userId_roleIdExist = await user_role.findOne({
    where: { user_id: userId, role_id: roleId },
  });
  if (userId_roleIdExist)
    return res.status(400).send({
      message: `An entry with userId: ${userId} and roleId: ${roleId} already exists!`,
    });

  // Create userRole
  try {
    let newUserRole = await user_role.create({
      user_id: userId,
      role_id: roleId,
    });
    return res.status(201).send(newUserRole);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

exports.updateUserRole = async (req, res) => {
  const { userId, roleId } = req.body;
  const { id } = req.params;

  const userRole = await user_role.findOne({ where: { id } });

  if (!userRole) {
    return res.status(400).send({
      message: `No user role entry exists with the id ${id}`,
    });
  }

  try {
    //TODO: refactor
    if (userId) {
      user_role.user_id = userId;
    }
    if (roleId) {
      user_role.role_id = roleId;
    }
    userRole.save();
    return res.status(200).send({
      message: `User role with id ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

exports.deleteUserRole = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the user role entry you are trying to delete.`,
    });

  const userRole = await user_role.findOne({ where: { id } });

  if (!userRole) {
    return res
      .status(400)
      .send({ message: `No user role exists with the id ${id}` });
  }

  try {
    await user_role.destroy();
    return res.status(204).send({
      message: `User role entry with the id: ${id} has been deleted.`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
