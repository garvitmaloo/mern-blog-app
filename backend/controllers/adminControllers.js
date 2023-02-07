exports.getAdminLogin = function (req, res) {
  res.status(200).json("Get Route for admin login");
};

exports.postAdminLogin = function (req, res) {
  res.status(200).json("Post route for admin login");
};

exports.adminHomePageController = function (req, res) {
  res.status(200).json("Fetching all posts for admin.");
};

exports.adminPostDetails = function (req, res) {
  res.status(200).json("Showing post details on admin side");
};

exports.postNewBlog = function (req, res) {
  res.status(201).json("Post request for a new blog post");
};

exports.editBlog = function (req, res) {
  console.log(req.body);
  res.status(202).json("Patch request for updating blog post");
};

exports.deleteBlog = function (req, res) {
  res.status(204).json("Delete request for deleting a blog post");
};

exports.postChangePassword = function (req, res) {
  res.status(200).json("Password change link sent to your email.");
};
