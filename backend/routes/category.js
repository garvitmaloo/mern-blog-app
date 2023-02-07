const router = require("express").Router();

const { getPostsForCategory } = require("../controllers/categoryController");

router.get("/:category", getPostsForCategory);

module.exports = router;
