const Post = require("../model/Posts");

exports.getPostsForCategory = async function (req, res) {
  try {
    const categoryName = req.params.category;
    const reqPosts = await Post.find({ postCategory: categoryName });

    res.status(200).json(reqPosts);
  } catch (err) {
    return res.status(404).json("Could not fetch requested posts");
  }
};
