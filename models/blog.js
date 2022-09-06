const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Please Enter a Text!"],
      maxLength: [100, "Bloog Too Long!"],
      minlength: 5,
    },
    title: {
      type: String,
      required: [true, "Please enter a titel!"],
      maxLength: [30, "Title Too Long!"],
    },
    author: {
      type: String,
      required: [true, "Please enter author name!"],
      maxLength: [20, "author name Too Long!"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    url: String,
    likes: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
