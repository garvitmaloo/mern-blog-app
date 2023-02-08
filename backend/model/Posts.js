const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    postBrief: {
      type: String,
      required: true,
    },
    postDetails: {
      type: String,
      required: true,
    },
    postImageURL: {
      type: String,
      required: true,
    },
    postCategory: {
      type: String,
      required: true,
    },
    readTime: {
      type: Number,
      required: true,
      default: 10,
    },
    author: {
      type: String,
      default: "Aditya Khuranna",
    },
    isPopular: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postsSchema);
