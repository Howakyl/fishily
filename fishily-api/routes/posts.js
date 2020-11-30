const router = require("express").Router();
const ctrl = require("../controllers");

// /api/fishily/posts
router.get("/", ctrl.posts.index);
router.post("/users/:id", ctrl.posts.create);

module.exports = router;