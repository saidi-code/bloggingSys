const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a titel!"],
      maxLength: [30, "Title Too Long!"],
    },
    author: {
      type: String,
      required: [true, "Please enter author name!"],
      maxLength: [20, "author nama Too Long!"],
    },
    url: String,
    likes: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
