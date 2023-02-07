exports.homePageController = function (req, res) {
  res
    .status(200)
    .json({
      latest: "Showing latest posts",
      popular: "Showing most popular posts",
    });
};
