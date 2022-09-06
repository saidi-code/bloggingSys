const bcrypt = require("bcrypt");

const User = require("../models/user");

const getAll = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(404).json({ status: "failed", msg: "blog is emty" });
    }
    return res
      .status(200)
      .json({ status: "success", nbrHits: users.length, users });
  } catch (error) {
    next(error);
  }
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
