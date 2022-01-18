const db = require("../config/sequelize.config");
const role = require("../models/role");

exports.findAllRoles = async (req, res) => {
  const roles = await role.findAll();

  if (!roles) {
    return res.status(404).send({
      message: `No role found.`,
    });
  }

  return res.status(200).send(roles);
};

exports.getRole = async (req, res) => {
  const { id } = req.params;
  const role = await role.findOne({ where: { id } });

  if (!role) {
    return res.status(404).send({
      message: `No role found with the id ${id}`,
    });
  }

  return res.status(200).send(role);
};

exports.createRole = async (req, res) => {
  const { name } = req.body;
  // Checks if the role name exists.
  if (!name) {
    return res.status(400).send({
      message: "You need to fill in all fields.",
    });
  }

  // Checks if the role name exists
  let roleExists = await role.findOne({
    where: { name },
  });
  if (roleExists)
    return res
      .status(400)
      .send({ message: `A role named ${name} already exists!` });

  // Create role
  try {
    let newRole = await role.create({
      name,
    });
    return res.status(201).send(newRole);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

exports.updateRole = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const role = await role.findOne({ where: { id } });

  if (!role) {
    return res.status(400).send({
      message: `No role exists with the id ${id}`,
    });
  }

  try {
    //TODO: refactor
    if (name) {
      role.name = name;
    }
    role.save();
    return res.status(200).send({
      message: `Role ${name} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

exports.deleteRole = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the role you are trying to delete.`,
    });

  const role = await role.findOne({ where: { id } });

  if (!role) {
    return res
      .status(400)
      .send({ message: `No role exists with the id ${id}` });
  }

  try {
    await role.destroy();
    return res.status(204).send({ message: `Product ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
