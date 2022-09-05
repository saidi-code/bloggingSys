const Blog = require("../models/blog");
const logger = require("../utils/logger");
const create = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({ status: "success", msg: "blog is created", blog });
  } catch (error) {
    // logger.error(error);
    res.status(500).json({ error });
  }
};

const getAll = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs) {
      return res.status(404).json({ status: "failed", msg: "blog is emty" });
    }
    res.status(200).json({ status: "success", nbrHits: blogs.length, blogs });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const updateOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({ msg: `No blog with id: ${id} find!` });
    }
    res.status(200).json({ status: "success", blog });
  } catch (error) {
    next(error);
  }
  // req.body
};
const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.find({ _id: id });
    if (!blog) {
      return res.status(404).json({ msg: `No blog with id: ${id} find!` });
    }
    res.status(200).json({ status: "success", blog });
  } catch (error) {
    next(error);
  }
};
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOneAndDelete({ _id: id });
    if (!blog) {
      return res.status(404).json({ msg: `No blog with id: ${id} find!` });
    }
    res.status(200).json({ status: "success", blog });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  findOne,
  updateOne,
  deleteOne,
};
