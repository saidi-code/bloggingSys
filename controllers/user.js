const bcrypt = require("bcrypt");

const User = require("../models/user");

const getAll = (req, res) => {
  res.json({ msg: `get All User` });
};
const createUser = async (req, res, next) => {
  try {
    const { name, password, username } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      name,
      username,
      password: hashedPassword,
    };
    const user = await User.create(newUser);
    return res.status(200).json({ status: "success", user });
  } catch (error) {
    next(error);
  }
};
const findUser = (req, res) => {
  res.json({ msg: `find user` });
};
const updateUser = (req, res) => {
  res.json({ msg: "update user" });
};
const deleteUser = (req, res) => {
  res.json({ msg: "delete user" });
};

module.exports = {
  getAll,
  createUser,
  findUser,
  updateUser,
  deleteUser,
};
