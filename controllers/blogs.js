const Blog = require("../models/blog");

const create = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({ status: "success", msg: "blog is created", blog });
  } catch (error) {
    // logger.error(error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs) {
      return res.status(404).json({ status: "failed", msg: "blog is emty" });
    }
    return res
      .status(200)
      .json({ status: "success", nbrHits: blogs.length, blogs });
  } catch (error) {
    next(error);
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
    return res.status(200).json({ status: "success", blog });
  } catch (error) {
    next(error);
  }
  // req.body
};
const findOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json({ msg: `No blog with id: ${id} find!` });
    }
    return res.status(200).json({ status: "success", blog });
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
    return res.status(200).json({ status: "success", blog });
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
