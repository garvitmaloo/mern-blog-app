const Posts = require("../model/Posts");

exports.fetchAllPosts = async function (req, res) {
  try {
    const allPosts = await Posts.find();

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(404).json("Could not fetch posts.");
  }
};

exports.fetchPostDetails = function (req, res) {
  res.send("Post Details");
};
