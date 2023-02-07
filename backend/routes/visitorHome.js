const router = require("express").Router();

const { homePageController } = require("../controllers/homePageController");

router.get("/", homePageController);

module.exports = router;
