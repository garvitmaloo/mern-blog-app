const Posts = require("../model/Posts");

exports.fetchAllPosts = async function (req, res) {
  try {
    const allPosts = await Posts.find();
    const paginatedResults = res.paginatedResults;

    res.status(200).json(paginatedResults);
  } catch (err) {
    res.status(404).json("Could not fetch posts.");
  }
};

exports.fetchPostDetails = async function (req, res) {
  try {
    const postDetails = await Posts.findById(req.params.id);

    res.status(200).json(postDetails);
  } catch (err) {
    res.status(404).json("Something went wrong: Could not fetch post details");
  }
};
