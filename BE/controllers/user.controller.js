const db = require("../config/config");
const model = require("../models");
const User = model.User;

const { saltAndHashPassword } = require("../utils/password");

exports.findAllUsers = async (req, res) => {
  const users = await User.findAll();

  if (!users) {
    return res.status(404).send({
      message: `No user found.`,
    });
  }

  return res.status(200).send(users);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: { id },
  });

  if (!user) {
    return res.status(404).send({
      message: `No user found with the id ${id}`,
    });
  }

  return res.status(200).send(user);
};

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send({
      message: "You need to fill in all fields.",
    });
  }

  // Checks if the email exists
  let userEmailExists = await User.findOne({
    where: { email },
  });
  if (userEmailExists)
    return res
      .status(400)
      .send({ message: `A user with the email ${email} already exists!` });

  // Create user
  try {
    const hashedPassword = await saltAndHashPassword(password);
    let newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.status(404).send({
      message: `No user exists with the id ${id}`,
    });
  }

  try {
    //TODO: refactor
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = await saltAndHashPassword(password);
    }
    user.save();
    return res.status(200).send({
      message: `User ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send({
      message: `Please provide the ID of the user you are trying to delete.`,
    });

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res
      .status(400)
      .send({ message: `No user exists with the id ${id}` });
  }

  try {
    await user.destroy();
    return res.status(204).send({ message: `User ${id} has been deleted.` });
  } catch (err) {
    return res.status(500).send({
      message: `Error : ${err.message}`,
    });
  }
};
