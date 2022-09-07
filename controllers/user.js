const bcrypt = require("bcrypt");

const User = require("../models/user");

const getAll = async (req, res) => {
  try {
    const users = await User.find({}).populate("blogs");
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
const findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ msg: `No blog with id: ${id} find!` });
    }
    return res.status(200).json({ status: "success", user });
  } catch (error) {
    next(error);
  }
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
