const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "User Name is already exist!"],
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
    ],
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
