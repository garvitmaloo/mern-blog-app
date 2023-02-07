const router = require("express").Router();

const newsletterControllers = require("../controllers/newsletterController");

router.post("/", newsletterControllers.subscribeToNewsletter);

module.exports = router;
