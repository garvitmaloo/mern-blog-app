const router = require("express").Router();
const multer = require("multer");
const Posts = require("../model/Posts");

const { getPaginatedResults } = require("../middleware/pagination");

const upload = multer();

const adminControllers = require("../controllers/adminControllers");
const postControllers = require("../controllers/postController");

router.post("/", adminControllers.postAdminLogin);

router.get("/home", getPaginatedResults(Posts), postControllers.fetchAllPosts);

router.get("/post/:id", postControllers.fetchPostDetails);

router.post(
  "/post/new-post",
  upload.single("bannerImage"),
  adminControllers.postNewBlog
);

router.patch(
  "/post/:id",
  upload.single("bannerImage"),
  adminControllers.editBlog
);

router.delete("/post/:id", adminControllers.deleteBlog);

router.post("/change-password", adminControllers.postChangePassword);

router.post("/reset-password", adminControllers.postResetPassword);

module.exports = router;
