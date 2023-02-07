exports.getPostsForCategory = function (req, res) {
  const params = req.params;

  res.send(`Showing blogs for ${params.category}`);
};
