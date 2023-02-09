const Post = require("../model/Posts");

exports.homePageController = async function (req, res) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const criteriaDate = new Date(`${currentYear}-${currentMonth + 1}-2`);

  // Fetching all posts posted on or after first date of the current month
  const latestPosts = await Post.find({
    createdAt: { $gte: criteriaDate },
  });

  // Fetching all posts marked as popular
  const popularPosts = await Post.find({ isPopular: true });

  res.status(200).json({
    latestPosts,
    popularPosts,
  });
};
