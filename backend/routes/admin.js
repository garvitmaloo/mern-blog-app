const router = require("express").Router();
const multer = require("multer");

const upload = multer();

const adminControllers = require("../controllers/adminControllers");
const postControllers = require("../controllers/postController");

router.post("/", adminControllers.postAdminLogin);

router.get("/home", postControllers.fetchAllPosts);

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

module.exports = router;
