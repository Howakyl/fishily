const router = require("express").Router();
const ctrl = require("../controllers");

// /api/fishily/posts
router.get("/", ctrl.posts.index);

module.exports = router;