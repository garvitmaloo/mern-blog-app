const router = require("express").Router();

const adminControllers = require("../controllers/adminControllers");

router.get("/", adminControllers.getAdminLogin);

router.post("/", adminControllers.postAdminLogin);

router.get("/home", adminControllers.adminHomePageController);

router.get("/post/:id", adminControllers.adminPostDetails);

router.post("/post/new-post", adminControllers.postNewBlog);

router.patch("/post/:id", adminControllers.editBlog);

router.delete("/post/:id", adminControllers.deleteBlog);

router.post("/change-password", adminControllers.postChangePassword);

module.exports = router;
