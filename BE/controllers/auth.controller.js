require("dotenv").config();
const UserRole = require("../models/user_role");
const User = require("../models/user");
const Role = require("../models/role");
const jwt = require("jsonwebtoken");
const { saltAndHashPassword, comparePasswords } = require("../utils/password");
const { registerValidation, loginValidation } = require("../utils/validation");

//HANDLE REGISTER.

exports.register = async (req, res) => {
  // Validate user object
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { firstName, lastName, email, password } = req.body;

  // Check if the user is already in the database
  let userEmailExists = await User.findOne({ where: { email } });
  if (userEmailExists)
    return res
      .status(400)
      .send({ message: `A user with the email ${email} already exists!` });

  // Hash password
  const hashedPassword = await saltAndHashPassword(password);

  // Create & Save & Authorize User
  try {
    let newUser = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashedPassword,
    });

    // Give default role to the user (authorization concept)
    await setDefaultRole(newUser.id);

    return res.status(201).send(newUser); // TODO: { user: newUser.id } - best way is to send activation mail, then assign the default user role.
  } catch (err) {
    return res.status(500).send({ message: `Error : ${err.message}` });
  }
};

/**
 * Login for user
 * @param {Express.request} req Request body that includes user data of email and password
 * @param {Express.response} res
 * @returns Returns token id succeeded.
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validate user object
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the email exists
  let user = await User.findOne({
    //TODO: fetch user roles within these block
    // include: [
    //     {
    //         model: UserRole,
    //         attributes: ["roleId"],
    //         include: [{model: Role, attributes:["name"]}],
    //     },
    // ],
    where: { email },
  });
  if (!user)
    return res.status(400).send({ message: `Email or password is wrong.` });

  // Check if the password correct
  const validPass = await comparePasswords(password, user.password);
  if (!validPass) return res.status(400).send({ message: `Invalid password.` });

  // Get user claims
  const roles = await getClaims(user.id);

  // Create & assign a token
  const token = jwt.sign(
    { sub: user.id, roles: roles, email: user.email },
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXP }
  );

  res
    .header("Authorization", `Bearer ${token}`)
    .status(200)
    .send({ token: `Bearer ${token}` });
};

/**
 *  Sets default role(student) to the newly registered user.
 * @param {Integer} userId
 */
const setDefaultRole = async (userId) => {
  var defaultRole = await Role.findOne({
    where: { name: "Student" },
  });

  let newUserRole = await UserRole.create({
    user_id: userId,
    role_id: defaultRole.id,
  });
};

/**
 *  Gets roles of the user
 * @param {Integer} userId
 */
const getClaims = async (userId) => {
  const userRoles = await UserRole.findAll({
    where: { user_id: userId },
    attributes: ["role_id"],
    include: { model: Role, right: true, attributes: ["name"] }, // Includes Roles table and selects name field only.
  });

  return userRoles;
};
