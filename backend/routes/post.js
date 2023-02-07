const router = require("express").Router();
const postControllers = require("../controllers/postController");

router.get("/:id", postControllers.fetchPostDetails);

module.exports = router;
